import React from 'react';
import { iconFor } from '../utils/icons';

// 研究領域「蜂巢」：依數量（4～7 格）使用設計好的排法
// 點一格就選取它（選取的格子是實心藍紫色），詳細內容由外層顯示在右邊

// 依數量使用固定排法（4～7 格各自設計過）。座標單位：x 是半格寬，y 是列
// 格子依 RESEARCH_AREAS 的順序，由左到右、由上到下填入
const LAYOUTS = {
  4: [[1, 0], [0, 1], [2, 1], [1, 2]], //                                 菱形 1-2-1
  5: [[0, 0], [2, 0], [4, 0], [1, 1], [3, 1]], //                          3-2
  6: [[0, 0], [2, 0], [1, 1], [3, 1], [0, 2], [2, 2]], //                 2-2-2 交錯
  7: [[1, 0], [3, 0], [0, 1], [2, 1], [4, 1], [1, 2], [3, 2]], //          花形 2-3-2
};
export const MAX_HEXES = 7;
const layoutFor = (n) => LAYOUTS[n] || LAYOUTS[7].slice(0, n);

const S = 84; // 六角形中心到角的距離
const GAP = 4; // 格子之間的間隙
const SQ3 = Math.sqrt(3);

const hexPoints = (s) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = ((60 * i - 90) * Math.PI) / 180;
    return `${(s * Math.cos(a)).toFixed(1)},${(s * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

// 英文副標太長時，從最靠近中間的空白斷成兩行
const splitLabel = (text, max = 16) => {
  if (text.length <= max || !text.includes(' ')) return [text];
  const mid = text.length / 2;
  let best = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
  }
  return [text.slice(0, best), text.slice(best + 1)];
};

const ResearchHoneycomb = ({ items, selectedId, onSelect }) => {
  const layout = layoutFor(items.length);
  const pos = items.map((_, i) => {
    const [hx, row] = layout[i];
    return [(hx * S * SQ3) / 2, row * S * 1.5];
  });
  const pad = S + 4;
  const xs = pos.map((p) => p[0]);
  const ys = pos.map((p) => p[1]);
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const w = Math.max(...xs) + pad - minX;
  const h = Math.max(...ys) + pad - minY;
  const pts = hexPoints(S - GAP);

  return (
    <svg viewBox={`${minX} ${minY} ${w} ${h}`} className="w-full max-w-[400px] h-auto mx-auto select-none" role="group" aria-label="研究領域">
      {items.map((item, i) => {
        const Icon = iconFor(item.icon);
        const [x, y] = pos[i];
        const on = item.id === selectedId;
        const pick = () => onSelect(item);
        return (
          <g
            key={item.id || item.title}
            transform={`translate(${x} ${y})`}
            role="button"
            tabIndex={0}
            aria-label={item.title}
            aria-pressed={on}
            onClick={pick}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), pick())}
            className="group cursor-pointer focus:outline-none"
          >
            <polygon
              points={pts}
              strokeWidth="1.5"
              className={`transition-colors duration-200 ${
                on
                  ? 'fill-brand-600 stroke-brand-600'
                  : 'fill-white stroke-brand-200 group-hover:fill-brand-50 group-hover:stroke-brand-400 group-focus-visible:stroke-brand-600'
              }`}
            />
            <Icon
              x={-15}
              y={-46}
              width={30}
              height={30}
              strokeWidth={1.6}
              className={`transition-colors ${on ? 'text-white' : 'text-brand-600'}`}
            />
            <text
              textAnchor="middle"
              y="10"
              fontSize="17"
              fontWeight="700"
              fontFamily='"Noto Serif TC", serif'
              className={`transition-colors ${on ? 'fill-white' : 'fill-slate-900'}`}
            >
              {item.title}
            </text>
            <text textAnchor="middle" fontSize="9" letterSpacing="1" className={on ? 'fill-brand-100' : 'fill-slate-500'}>
              {splitLabel(item.subtitle.toUpperCase()).map((line, k) => (
                <tspan key={k} x="0" y={31 + k * 12}>{line}</tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default ResearchHoneycomb;
