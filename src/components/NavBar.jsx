import React, { useState, useEffect } from 'react';
import { Cpu, Send, Menu, X } from 'lucide-react';
import { LAB_NAME, LAB_NAME_EN, SITE } from '../data/labData';
import ContactMenu, { ContactOptions } from './ContactMenu';
import { routeHref } from '../hooks/useHashRoute';

const LINKS = [
  { id: 'research', label: SITE.nav.research },
  { id: 'publications', label: SITE.nav.publications },
  { id: 'team', label: SITE.nav.team },
];

const NavBar = ({ route }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 換頁後自動收起手機選單
  useEffect(() => setIsMenuOpen(false), [route]);

  const linkClass = (id) =>
    `px-3 py-2 rounded-md transition-colors font-medium ${
      route === id ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur border-b border-slate-200' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
        <a href={routeHref('home')} className="flex items-center gap-3 min-w-0">
          <div className="bg-brand-900 p-2 rounded-lg flex-shrink-0">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-base font-bold leading-tight text-slate-800 truncate">{LAB_NAME}</span>
            <span className="text-[10px] text-slate-500 tracking-wider uppercase truncate">{LAB_NAME_EN}</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a key={l.id} href={routeHref(l.id)} className={linkClass(l.id)}>
              {l.label}
            </a>
          ))}
          <div className="ml-3">
            <ContactMenu
              align="right"
              buttonClass="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <Send size={14} />
              <span>{SITE.nav.contact}</span>
            </ContactMenu>
          </div>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-slate-700"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 手機選單 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col">
          <a href={routeHref('home')} className={linkClass('home')}>{SITE.nav.home}</a>
          {LINKS.map((l) => (
            <a key={l.id} href={routeHref(l.id)} className={linkClass(l.id)}>
              {l.label}
            </a>
          ))}
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="px-3 pt-1 pb-1 text-xs text-slate-400">{SITE.nav.contact}</p>
            <ContactOptions
              onDone={() => setIsMenuOpen(false)}
              itemClass="flex items-center gap-2.5 px-3 py-2 rounded-md text-slate-600 hover:text-brand-600"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
