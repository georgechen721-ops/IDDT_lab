// ─────────────────────────────────────────────────────────────────────────────
// 建置時自動壓縮照片（npm run build 最後會執行這支程式）
//
// - 只處理 dist/（上線用的複本），public/ 裡的原圖完全不會被改動
// - 依照片用途縮到適合的大小、重新壓縮、清除 GPS 等拍攝資訊
// - 檔名不變，所以 labData.js 不用改
// - 以後直接上傳手機原圖即可，不需要手動壓縮
// ─────────────────────────────────────────────────────────────────────────────
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { SLIDES, SITE } from '../src/data/labData.js';

// ── 可以調整的設定 ────────────────────────────────────────────────────────────
const SIZES = {
  hero: 2400,    // 首頁 Hero 背景（SITE.heroImage）
  gallery: 1200, // 研究室日常照片（SLIDES）
  default: 800,  // 其他照片：成員、教授…
};
const JPEG_QUALITY = 80; // 1–100，越高越清楚、檔案越大
// ─────────────────────────────────────────────────────────────────────────────

const DIST = path.resolve('dist');
const clean = (p) => p.replace(/^\/+/, '');
const heroFiles = new Set([clean(SITE.heroImage)]);
const galleryFiles = new Set(SLIDES.map((s) => clean(s.url)));

const maxSizeFor = (file) =>
  heroFiles.has(file) ? SIZES.hero : galleryFiles.has(file) ? SIZES.gallery : SIZES.default;

const kb = (n) => `${Math.round(n / 1024)} KB`;

async function optimize(file) {
  const full = path.join(DIST, file);
  const ext = path.extname(file).toLowerCase();
  const input = await readFile(full);
  const max = maxSizeFor(file);

  // .rotate() 依手機的方向資訊轉正；sharp 預設不保留 EXIF（含 GPS）
  let pipeline = sharp(input).rotate().resize(max, max, { fit: 'inside', withoutEnlargement: true });
  pipeline = ext === '.png'
    ? pipeline.png({ compressionLevel: 9, palette: true, quality: 85 })
    : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });

  const output = await pipeline.toBuffer();
  if (output.length < input.length) {
    await writeFile(full, output);
    return [input.length, output.length];
  }
  return [input.length, input.length]; // 壓了反而變大就保留原檔
}

const files = (await readdir(DIST)).filter((f) => /\.(jpe?g|png)$/i.test(f));
let before = 0;
let after = 0;
for (const file of files) {
  try {
    const [b, a] = await optimize(file);
    before += b;
    after += a;
    if (b !== a) console.log(`  ${file.padEnd(24)} ${kb(b).padStart(8)} → ${kb(a)}`);
  } catch (err) {
    console.warn(`  ⚠ ${file} 無法處理，保留原檔：${err.message}`);
    before += (await stat(path.join(DIST, file))).size;
  }
}
console.log(`照片壓縮完成：${files.length} 個檔案，${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB`);
