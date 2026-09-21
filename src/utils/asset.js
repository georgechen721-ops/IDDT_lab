// 把 public/ 裡的檔名轉成實際網址。
// 部署路徑（vite.config.js 的 base）改了也不用動資料檔。
// 已經是完整網址（http/https）的就原樣回傳。
export const asset = (path) => {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '');
};
