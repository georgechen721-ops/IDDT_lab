import React from 'react';
import { RESEARCH_FRAMEWORK as F } from '../data/labData';

// 研究架構圖：電腦與平板用向量圖（SVG），手機改成上下排列的文字版，字才不會太小
// 內容全部在 labData.js 的 RESEARCH_FRAMEWORK 修改

const C = {
  panelL: '#EEF1FC',
  panelR: '#F3F1FA',
  ring: '#9FACE9',
  arrow: '#5664D3',
  nodeStroke: '#C3CBF2',
  ink: '#1D2458',
  sub: '#475569',
  brand: '#4453C8',
  brandDark: '#3743A6',
};
const W = 960;
const H = 650;
const CX = 480;
const CY = 372;
const R = 225;
const lines = (t) => t.split('\n');

// 多行文字（置中）
const MultiText = ({ x, y, text, size = 14, lh = 18, weight = 600, fill = C.ink, anchor = 'middle', family }) => {
  const ls = lines(text);
  const y0 = y - ((ls.length - 1) * lh) / 2;
  return (
    <text x={x} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill} fontFamily={family}>
      {ls.map((l, i) => (
        <tspan key={i} x={x} y={y0 + i * lh} dominantBaseline="middle">{l}</tspan>
      ))}
    </text>
  );
};

// ── 齒輪 ──────────────────────────────────────────────────────────────────────
const PITCH = 24; // 齒距（三個齒輪相同才咬得起來）
const TOOTH = 6.5; // 齒的高度（半）

// 產生齒輪外形：n 個齒、外半徑 ro、齒根半徑 ri，第 0 個齒朝右
function gearPath(n, ro, ri) {
  const step = (Math.PI * 2) / n;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const c = i * step;
    [
      [c - step * 0.5, ri],
      [c - step * 0.28, ri],
      [c - step * 0.17, ro],
      [c + step * 0.17, ro],
      [c + step * 0.28, ri],
    ].forEach(([a, r]) => pts.push(`${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`));
  }
  return `M${pts.join('L')}Z`;
}

// 齒輪的位置與樣式；第一個是大齒輪，其他依序咬合，位置依咬合條件自動計算
const GEAR_STYLES = [
  { n: 20, fill: C.brand, ink: '#fff', size: 13 }, //   大：Decision Making
  { n: 14, fill: '#7483DD', ink: '#fff', size: 11 }, // 中：Big Data
  { n: 12, fill: '#C3CBF2', ink: C.ink, size: 9.5 }, // 小：System Simulation
];
const GEAR_DIRECTIONS = [Math.atan2(-102, -80), Math.atan2(-60, 74)]; // 中齒輪在大齒輪左上、小齒輪在中齒輪右上

function buildGears(methods) {
  const out = [{ ...GEAR_STYLES[0], x: 505, y: 428, phase: 0, dir: 1 }];
  for (let k = 1; k < Math.min(methods.length, GEAR_STYLES.length); k++) {
    const A = out[k - 1];
    const B = { ...GEAR_STYLES[k] };
    const rpA = (A.n * PITCH) / (2 * Math.PI);
    const rpB = (B.n * PITCH) / (2 * Math.PI);
    const th = GEAR_DIRECTIONS[k - 1];
    B.x = A.x + (rpA + rpB) * Math.cos(th);
    B.y = A.y + (rpA + rpB) * Math.sin(th);
    const stepA = (Math.PI * 2) / A.n;
    const delta = (((th - A.phase) % stepA) + stepA) % stepA; // A 在接觸點的齒相位
    B.phase = th + Math.PI + Math.PI / B.n - (delta * A.n) / B.n;
    B.dir = -A.dir;
    out.push(B);
  }
  return out.map((g, i) => {
    const rp = (g.n * PITCH) / (2 * Math.PI);
    return {
      ...g,
      ...methods[i],
      ro: rp + TOOTH,
      ri: rp - TOOTH,
      phaseDeg: (g.phase * 180) / Math.PI,
      duration: g.n * 3.5, // 齒數越多轉越慢
    };
  });
}

function Diagram() {
  const n = F.topics.length;
  const angle = (i) => (-90 + (360 / n) * i) * (Math.PI / 180);
  const nodes = F.topics.map((t, i) => ({ t, x: CX + R * Math.cos(angle(i)), y: CY + R * Math.sin(angle(i)) }));

  // 中間的齒輪：齒距相同、轉速與齒數成反比，所以轉動時會一直咬合
  const gears = buildGears(F.methods);

  const serif = '"Noto Serif TC", serif';
  const [L, Rt] = F.domains;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={F.title}>

      {/* 兩個應用領域的底色 */}
      <rect x="8" y="8" width={CX - 12} height={H - 16} rx="18" fill={C.panelL} />
      <rect x={CX + 4} y="8" width={CX - 12} height={H - 16} rx="18" fill={C.panelR} />

      {/* 領域標題與應用產業 */}
      {[{ d: L, x: 40 }, { d: Rt, x: 700 }].map(({ d, x }) => (
        <g key={d.title}>
          <text x={x} y="52" fontSize="22" fontWeight="700" fill={C.ink} fontFamily={serif}>{d.title}</text>
          <text x={x} y="76" fontSize="13" fill={C.brand} fontWeight="600">{d.subtitle}</text>
          {d.items.map((it, i) => (
            <g key={it}>
              <circle cx={x + 3} cy={100 + i * 20 - 4} r="2.5" fill={C.ring} />
              <text x={x + 12} y={100 + i * 20} fontSize="12.5" fill={C.sub}>{it}</text>
            </g>
          ))}
        </g>
      ))}

      {/* 循環的圓環與箭頭 */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={C.ring} strokeWidth="1.5" strokeDasharray="4 5" />
      {nodes.map((_, i) => {
        // 箭頭放在兩個主題中間，方向沿著圓環切線（順時針）
        const a = angle(i + 0.5);
        const x = CX + R * Math.cos(a);
        const y = CY + R * Math.sin(a);
        const deg = (a * 180) / Math.PI + 90;
        return <path key={i} d="M-5,-5 L6,0 L-5,5 Z" fill={C.arrow} transform={`translate(${x} ${y}) rotate(${deg})`} />;
      })}

      {/* 應用主題 */}
      {nodes.map(({ t, x, y }) => (
        <g key={t}>
          <rect x={x - 82} y={y - 29} width="164" height="58" rx="10" fill="#fff" stroke={C.nodeStroke} strokeWidth="1.5" />
          <MultiText x={x} y={y} text={t} size={14} lh={18} />
        </g>
      ))}

      {/* 核心方法（齒輪） */}
      {gears.map((g) => (
        <g key={g.title} transform={`translate(${g.x} ${g.y})`}>
          <g className="gear" style={{ animation: `${g.dir > 0 ? 'gear-cw' : 'gear-ccw'} ${g.duration}s linear infinite` }}>
            <path d={gearPath(g.n, g.ro, g.ri)} transform={`rotate(${g.phaseDeg})`} fill={g.fill} />
          </g>
          <MultiText
            x={0}
            y={g.detail ? -16 : 0}
            text={g.title}
            size={g.size}
            lh={g.size + 3}
            weight={700}
            fill={g.ink}
          />
          {g.detail && (
            <MultiText x={0} y={22} text={g.detail} size={10.5} lh={13} weight={500} fill="#DEE3F8" />
          )}
        </g>
      ))}
    </svg>
  );
}

// 手機版：同樣的內容改成上下排列
function MobileList() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white border border-slate-200 p-4">
        <p className="text-[11px] tracking-[0.15em] text-slate-500 mb-3">CORE METHODS</p>
        <div className="space-y-2">
          {F.methods.map((m, i) => (
            <div
              key={m.title}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                i === 0 ? 'bg-brand-600 text-white' : 'border border-brand-600 text-brand-700'
              }`}
            >
              {m.title.replace(/\n/g, ' ')}
              {m.detail && <span className="block text-xs font-normal text-brand-100 mt-0.5">{m.detail.replace(/\n/g, ' · ')}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {F.topics.map((t) => (
          <span key={t} className="text-sm px-3 py-1.5 rounded-lg bg-white border border-brand-200 text-brand-900 font-medium">
            {t.replace(/\n/g, ' ')}
          </span>
        ))}
      </div>
      {F.domains.map((d, i) => (
        <div key={d.title} className={`rounded-xl p-4 ${i === 0 ? 'bg-brand-50' : 'bg-[#F3F1FA]'}`}>
          <p className="font-serif font-bold text-lg text-brand-900">{d.title}</p>
          <p className="text-xs font-semibold text-brand-600 mb-2">{d.subtitle}</p>
          <ul className="text-sm text-slate-600 space-y-1">
            {d.items.map((it) => (
              <li key={it} className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const ResearchFramework = () => (
  <>
    <div className="hidden md:block max-w-5xl mx-auto">
      <Diagram />
    </div>
    <div className="md:hidden">
      <MobileList />
    </div>
  </>
);

export default ResearchFramework;
