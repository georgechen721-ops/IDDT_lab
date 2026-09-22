// 齒輪共用工具：研究架構圖與首頁研究領域都會用到

// 產生齒輪外形：n 個齒、外半徑 ro、齒根半徑 ri，第 0 個齒朝右
export function gearPath(n, ro, ri) {
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

// 齒輪 B 在齒輪 A 的 th 方向（弧度）時，B 要轉多少才能和 A 咬合
export function meshPhase(A, nB, th) {
  const stepA = (Math.PI * 2) / A.n;
  const delta = (((th - A.phase) % stepA) + stepA) % stepA;
  return th + Math.PI + Math.PI / nB - (delta * A.n) / nB;
}
