import React, { useState, useEffect } from 'react';
import { ChevronRight, GraduationCap, Briefcase, Trophy, Phone, Mail, MapPin, Users, X, ArrowUp, Target } from 'lucide-react';
import { PROFESSOR, TEAM } from '../data/labData';

const TeamPage = () => {
  const [activeGraduateType, setActiveGraduateType] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const graduateList = activeGraduateType ? TEAM.graduates[activeGraduateType] : [];
  const graduateTitle = activeGraduateType === 'masters' ? '碩士班已畢業學生' : '在職專班已畢業學生';
  const mastersYear2 = TEAM.masters.filter((m) => m.year === '碩二');
  const mastersYear1 = TEAM.masters.filter((m) => m.year === '碩一');

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
    <section className="animate-in fade-in duration-500 max-w-7xl mx-auto px-6 py-12">
      <header className="mb-16">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">成員介紹</h2>
          <div className="w-20 h-2 bg-[#0891B2] rounded-full" />
        </div>
      </header>

    {/* 教授 */}
    <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 mb-24">
      {/* 教授名稱與聯絡資訊 */}
      <div className="px-8 md:px-14 pt-8 md:pt-14">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">{PROFESSOR.name}</h3>
            <p className="text-cyan-600 font-bold text-xl">{PROFESSOR.title}</p>
          </div>
          <div className="hidden md:flex flex-col text-right text-sm text-slate-500 space-y-2">
            <div className="flex items-center justify-end space-x-2"><Phone size={14} /><span>{PROFESSOR.contact.phone}</span></div>
            <div className="flex items-center justify-end space-x-2 text-cyan-600 font-medium"><Mail size={14} /><span>{PROFESSOR.contact.email}</span></div>
            <div className="flex items-center justify-end space-x-2"><MapPin size={14} /><span>{PROFESSOR.contact.office}</span></div>
          </div>
        </div>
      </div>

      {/* 照片 + 研究領域 + 學歷背景 */}
      <div className="px-8 md:px-14 py-8 md:py-14 flex flex-col lg:flex-row lg:gap-8">
        {/* 照片 */}
        <div className="lg:w-1/3 flex-shrink-0">
          <img src={PROFESSOR.image} alt={PROFESSOR.name} className="w-full aspect-[3/4] object-cover object-top rounded-2xl" />
        </div>

        {/* 研究領域 + 學歷背景 */}
        <div className="lg:w-2/3 space-y-8">
          {/* 研究領域 */}
          <div>
            <h4 className="flex items-center text-slate-800 font-bold mb-4">
              <Target className="mr-2 text-[#0891B2]" size={18} /> 研究領域 Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {PROFESSOR.researchInterests.map((interest, i) => (
                <span key={i} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#ecfeff] hover:text-[#0891B2] transition-colors cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* 學歷背景 */}
          <div>
            <h4 className="flex items-center text-slate-800 font-bold mb-4 border-b pb-2">
              <GraduationCap className="mr-2 text-[#0891B2]" size={18} /> 學歷背景
            </h4>
            <ul className="space-y-3">
              {PROFESSOR.education.map((edu, i) => (
                <li key={i} className="text-slate-600 flex items-start text-sm leading-relaxed">
                  <ChevronRight size={14} className="mt-1 mr-2 text-[#0891B2]" /> {edu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 工作經歷 */}
      <div className="px-8 md:px-14 pb-8 md:pb-14 border-t border-slate-200 pt-8 md:pt-14">
        <h4 className="flex items-center text-slate-800 font-bold mb-4">
          <Briefcase className="mr-2 text-[#0891B2]" size={18} /> 工作經歷
        </h4>
        <ul className="space-y-3">
          {PROFESSOR.experience.map((exp, i) => (
            <li key={i} className="text-slate-600 flex items-start text-sm leading-relaxed">
              <ChevronRight size={14} className="mt-1 mr-2 text-[#0891B2]" /> {exp}
            </li>
          ))}
        </ul>
      </div>

      {/* 榮譽與獎項 */}
      <div className="px-8 md:px-14 pb-8 md:pb-14 border-t border-slate-200 pt-8 md:pt-14">
        <h4 className="flex items-center text-slate-800 font-bold mb-4">
          <Trophy className="mr-2 text-[#0891B2]" size={18} /> 榮譽與獎項
        </h4>
        <ul className="space-y-3">
          {PROFESSOR.honors.map((honor, i) => (
            <li key={i} className="text-slate-600 flex items-start text-sm leading-relaxed">
              <ChevronRight size={14} className="mt-1 mr-2 text-[#0891B2]" /> {honor}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* 學生 */}
    <div className="space-y-24">
      {/* 碩士班 */}
      <div>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center">
            <h3 className="text-3xl font-black text-slate-800">碩士班學生</h3>
            <span className="ml-4 px-3 py-1 bg-[#ecfeff] text-[#0891B2] text-xs font-bold rounded-full">Full-time Masters</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveGraduateType('masters')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm"
          >
            <Users size={16} /> 查看已畢業學生
          </button>
        </div>

        <div className="space-y-10">
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-6">碩二學生</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mastersYear2.map((m, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-[#0891B2] transition-all shadow-sm hover:shadow-xl group">
                  <div className="h-48 bg-slate-100 overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{m.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic border-t pt-3">{m.interest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-6">碩一學生</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mastersYear1.map((m, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-[#0891B2] transition-all shadow-sm hover:shadow-xl group">
                  <div className="h-48 bg-slate-100 overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{m.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic border-t pt-3">{m.interest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 在職專班 */}
      <div>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center">
            <h3 className="text-3xl font-black text-slate-800">在職專班學生</h3>
            <span className="ml-4 px-3 py-1 bg-[#eff6ff] text-[#0891B2] text-xs font-bold rounded-full">Part-time / Professional</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveGraduateType('professional')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm"
          >
            <Users size={16} /> 查看已畢業學生
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.professional.map((m, idx) => (
            <div key={idx} className="bg-white rounded-3xl flex overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all p-4 items-center gap-6 relative">
              <img src={m.image} alt={m.name} className="w-24 h-32 rounded-2xl object-cover shadow-sm" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-bold text-slate-800">{m.name}</h4>
                </div>
                <p className="text-slate-500 text-sm leading-snug">{m.interest}</p>
              </div>
              <span className="absolute top-4 right-4 text-sm bg-slate-800 text-white px-2 py-0.5 rounded uppercase">{m.company}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {activeGraduateType && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60">
        <div className="w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[32px] bg-white shadow-2xl border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-slate-200 px-6 py-5">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{graduateTitle}</h3>
            </div>
            <button
              type="button"
              onClick={() => setActiveGraduateType(null)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              aria-label="關閉已畢業學生視窗"
            >
              <X size={18} />
            </button>
          </div>
          <div className="max-h-[72vh] overflow-y-auto px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {graduateList.length > 0 ? (
                graduateList.map((graduate, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-3 hover:bg-slate-100 transition-colors">
                    <h4 className="text-sm font-bold text-slate-800 mb-1">{graduate.name}</h4>
                    <p className="text-slate-600 text-xs leading-snug">{graduate.interest}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                  目前尚無已畢業學生資料。
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
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

export default TeamPage;
