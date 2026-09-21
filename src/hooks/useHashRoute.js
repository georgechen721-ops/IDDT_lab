import { useEffect, useState } from 'react';

// 用網址的 # 部分當作頁面路由，例如：
//   /IDDT_lab/#/team          → 成員頁
//   /IDDT_lab/#/publications  → 著作頁
//   /IDDT_lab/#/research      → 首頁並捲到研究領域
// GitHub Pages 不需要任何額外設定，瀏覽器的上一頁也能正常使用。
export const ROUTES = ['home', 'research', 'team', 'publications'];

const parse = () => {
  const key = window.location.hash.replace(/^#\/?/, '').split(/[/?]/)[0];
  return ROUTES.includes(key) ? key : 'home';
};

export const routeHref = (route) => (route === 'home' ? '#/' : `#/${route}`);

export default function useHashRoute() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
