import React, { useRef, useEffect, useState } from 'react';
import { BookOpen, Briefcase, Microscope, MapPin, ArrowUp } from 'lucide-react';
import { PUBLICATIONS } from '../data/labData';

const PublicationsPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nstcRef = useRef(null);
  const industryRef = useRef(null);
  const journalsRef = useRef(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = (ref) => {
    const element = ref.current;
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
    <section className="animate-in fade-in duration-500 max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">相關學術研究</h2>
          <div className="w-20 h-2 bg-[#0891B2] rounded-full" />
        </div>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => handleScroll(nstcRef)}
            className="px-4 py-2 bg-[#eff6ff] text-[#0F3460] font-semibold rounded-lg hover:bg-[#dbeafe] transition-colors flex items-center gap-2"
          >
            <BookOpen size={16} /> 國科會計畫
          </button>
          <button
            onClick={() => handleScroll(industryRef)}
            className="px-4 py-2 bg-[#ecfeff] text-[#0891B2] font-semibold rounded-lg hover:bg-[#cffafe] transition-colors flex items-center gap-2"
          >
            <Briefcase size={16} /> 產學合作
          </button>
          <button
            onClick={() => handleScroll(journalsRef)}
            className="px-4 py-2 bg-[#eff6ff] text-[#0F3460] font-semibold rounded-lg hover:bg-[#dbeafe] transition-colors flex items-center gap-2"
          >
            <Microscope size={16} /> 發行研究
          </button>
        </div>
      </header>

      <div className="space-y-16">
        {/* 國科會計畫 */}
        <div className="space-y-6">
          <div ref={nstcRef} className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-[#eff6ff] rounded-lg text-[#0891B2]"><BookOpen size={20} /></div>
            <h3 className="text-2xl font-bold text-slate-800">國科會計畫</h3>
          </div>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {PUBLICATIONS.nstc.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-[#bfdbfe] transition-all">
                <p className="text-[14px] text-[#0891B2] font-bold mb-3">{p.date}</p>
                <h4 className="font-bold text-slate-800 whitespace-pre-line">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 產學合作 */}
        <div className="space-y-6">
          <div ref={industryRef} className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-[#ecfeff] rounded-lg text-[#0891B2]"><Briefcase size={20} /></div>
            <h3 className="text-2xl font-bold text-slate-800">產學合作計畫</h3>
          </div>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {PUBLICATIONS.industry.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-[#0891B2] transition-all">
                <p className="text-[#0891B2] font-bold mb-1">{p.partner}</p>
                <h4 className="font-bold text-slate-800">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 期刊論文 */}
        <div className="space-y-6">
          <div ref={journalsRef} className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-[#eff6ff] rounded-lg text-[#0891B2]"><Microscope size={20} /></div>
            <h3 className="text-2xl font-bold text-slate-800">發行研究 (Journals)</h3>
          </div>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {PUBLICATIONS.journals.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-[#0891B2] transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-[#0891B2] whitespace-nowrap mt-1 flex-shrink-0">#{i + 1}</span>
                  <h4 className="font-bold text-slate-800 leading-snug">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {showScrollTop && (
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 group inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0891B2] text-white shadow-lg hover:bg-[#06B6D4] transition-all hover:scale-110 active:scale-95"
        aria-label="回到頂部"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    )}
    </>
  );
};

export default PublicationsPage;
