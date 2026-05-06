import React, { useState, useEffect } from 'react';
import { Cpu, Send, Menu, X } from 'lucide-react';
import { LAB_NAME, LAB_NAME_EN, PROFESSOR } from '../data/labData';

const NavBar = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ id, label, isAnchor }) => (
    <button
      onClick={() => {
        if (isAnchor) {
          setActiveTab('home');
          setTimeout(() => {
            document.getElementById('research-section')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          setActiveTab(id);
        }
        setIsMenuOpen(false);
      }}
      className={`px-4 py-2 transition-all duration-300 font-medium ${
        activeTab === id ? 'text-[#0891B2]' : 'text-slate-600 hover:text-[#06B6D4]'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="bg-gradient-to-br from-[#0891B2] to-[#0F3460] p-2 rounded-xl shadow-lg group-hover:rotate-6 transition-transform">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none text-slate-800">{LAB_NAME}</span>
            <span className="text-[10px] text-slate-500 tracking-wider font-semibold uppercase">{LAB_NAME_EN}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <NavItem id="research" label="研究領域" isAnchor />
          <NavItem id="publications" label="學術研究" />
          <NavItem id="team" label="團隊成員" />
          <a
            href={`mailto:${PROFESSOR.contact.email}`}
            className="ml-4 bg-[#0891B2] hover:bg-[#06B6D4] text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center space-x-2 transition-all shadow-md shadow-[#0891B2]/20"
          >
            <Send size={14} />
            <span>聯絡我們</span>
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 手機選單 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col space-y-2">
          <NavItem id="home" label="首頁" />
          <NavItem id="research" label="研究領域" isAnchor />
          <NavItem id="publications" label="學術研究" />
          <NavItem id="team" label="團隊成員" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
