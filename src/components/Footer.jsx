import React from 'react';
import { Cpu, MapPin, Phone, Mail } from 'lucide-react';
import { LAB_NAME, LAB_NAME_EN, PROFESSOR, SITE } from '../data/labData';
import { telHref } from '../utils/contact';

const Footer = () => (
  <footer className="bg-slate-900 text-white py-14 mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <Cpu className="text-brand-300 w-7 h-7" />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight">{LAB_NAME}</span>
            <span className="text-[10px] text-slate-400 tracking-widest">{SITE.footer.tagline}</span>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
          {SITE.footer.description}
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-brand-300 mb-5 tracking-wider">{SITE.footer.contactTitle}</h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-start gap-3"><MapPin size={18} className="text-brand-300 flex-shrink-0 mt-0.5" /><span>{PROFESSOR.contact.office}</span></div>
          <a href={telHref(PROFESSOR.contact.phone)} className="flex items-start gap-3 hover:text-white"><Phone size={18} className="text-brand-300 flex-shrink-0 mt-0.5" /><span>{PROFESSOR.contact.phone}</span></a>
          <a href={`mailto:${PROFESSOR.contact.email}`} className="flex items-start gap-3 hover:text-white break-all"><Mail size={18} className="text-brand-300 flex-shrink-0 mt-0.5" /><span>{PROFESSOR.contact.email}</span></a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mt-12 text-slate-500 text-xs border-t border-slate-800 pt-6">
      © {new Date().getFullYear()} {LAB_NAME_EN} Lab, {SITE.footer.copyright}.
    </div>
  </footer>
);

export default Footer;
