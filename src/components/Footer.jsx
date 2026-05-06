import React from 'react';
import { Cpu, MapPin, Phone, Mail } from 'lucide-react';
import { LAB_NAME, LAB_NAME_EN, PROFESSOR } from '../data/labData';

const Footer = ({ setActiveTab }) => (
  <footer className="bg-slate-900 text-white py-20 mt-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 relative z-10">
      <div>
        <div className="flex items-center space-x-3 mb-8">
            <Cpu className="text-[#0891B2] w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none">{LAB_NAME}</span>
              <span className="text-[10px] text-slate-500 tracking-widest">IDDT LABORATORY</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            我們致力於跨領域整合，透過數據科學與工程仿真，為企業與學界提供最強大的決策支持平台。
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#0891B2] mb-8 uppercase tracking-widest text-lg">聯繫資訊</h4>
          <div className="space-y-2 text-lg text-slate-400">
            <div className="flex items-center space-x-3"><MapPin size={20} className="text-[#0891B2]" /><span>{PROFESSOR.contact.office}</span></div>
            <div className="flex items-center space-x-3"><Phone size={20} className="text-[#0891B2]" /><span>{PROFESSOR.contact.phone}</span></div>
            <div className="flex items-center space-x-3"><Mail size={20} className="text-[#0891B2]" /><span>{PROFESSOR.contact.email}</span></div>
          </div>
        </div>
      </div>
    <div className="text-center mt-20 text-slate-600 text-xs border-t border-slate-800 pt-8">
      © 2025 {LAB_NAME_EN} Laboratory. Designed for Academic Excellence.
    </div>
  </footer>
);

export default Footer;
