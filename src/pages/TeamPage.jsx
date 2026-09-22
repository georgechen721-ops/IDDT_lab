import React, { useState } from 'react';
import { ChevronRight, GraduationCap, Briefcase, Trophy, Phone, Mail, MapPin, Users, Target } from 'lucide-react';
import { PROFESSOR, TEAM, SITE, RESEARCH_FRAMEWORK } from '../data/labData';
import ResearchFramework from '../components/ResearchFramework';
import { asset } from '../utils/asset';
import { telHref } from '../utils/contact';
import SectionHeading from '../components/SectionHeading';
import ScrollTopButton from '../components/ScrollTopButton';
import Modal from '../components/Modal';
import ContactMenu from '../components/ContactMenu';
import Reveal from '../components/Reveal';
import { StudentCard, ProfessionalCard } from '../components/StudentCard';

const TEXT = SITE.team;

// 教授資料裡「一條一條」的清單
const InfoList = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((text, i) => (
      <li key={i} className="text-slate-600 flex items-start text-base leading-relaxed">
        <ChevronRight size={14} className="mt-1 mr-2 text-brand-600 flex-shrink-0" />
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

const SubHeading = ({ icon: Icon, children, className = '' }) => (
  <h4 className={`flex items-center text-slate-800 font-semibold mb-4 ${className}`}>
    <Icon className="mr-2 text-brand-600" size={18} /> {children}
  </h4>
);

// 已畢業學生清單（放在共用的彈跳視窗裡）
const GraduateList = ({ list }) =>
  list.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {list.map((g, idx) => (
        <div key={idx} className="bg-slate-50 border border-slate-100 rounded-lg p-3">
          <h4 className="text-base font-semibold text-slate-800 mb-1">{g.name}</h4>
          <p className="text-slate-600 text-sm leading-snug whitespace-pre-line">{g.interest}</p>
        </div>
      ))}
    </div>
  ) : (
    <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
      {TEXT.graduates.empty}
    </div>
  );

const GraduateButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 text-sm text-slate-700 bg-white hover:bg-slate-50"
  >
    <Users size={15} /> {TEXT.graduates.button}
  </button>
);

const TeamPage = () => {
  const [graduateType, setGraduateType] = useState(null);
  const [showAllHonors, setShowAllHonors] = useState(false);
  const [photo, setPhoto] = useState(asset(PROFESSOR.image));

  const honors = showAllHonors ? PROFESSOR.honors : PROFESSOR.honors.slice(0, TEXT.honorsPreview);
  const mastersByYear = TEXT.mastersYearOrder
    .map((year) => ({ year, members: TEAM.masters.filter((m) => m.year === year) }))
    .filter((g) => g.members.length > 0); // 沒有人的年級就不顯示

  const { phone, email, office } = PROFESSOR.contact;

  return (
    <>
      <section className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading title={TEXT.title} />

        {/* 教授 */}
        <Reveal className="bg-white rounded-2xl shadow-sm border border-slate-200 mb-20">
          <div className="p-6 md:p-10 flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10">
            {/* 照片：電腦版高度自動等於右欄，上緣對齊姓名、下緣對齊學歷背景 */}
            <div className="relative flex-shrink-0 lg:w-[280px]">
              <img
                src={photo}
                onError={() => PROFESSOR.imageFallback && photo !== PROFESSOR.imageFallback && setPhoto(PROFESSOR.imageFallback)}
                alt={PROFESSOR.name}
                className="w-full max-w-sm mx-auto aspect-[3/4] lg:max-w-none lg:aspect-auto lg:absolute lg:inset-0 lg:h-full object-cover object-top rounded-xl bg-slate-100"
              />
            </div>

            <div className="flex-1 min-w-0 space-y-8">
              {/* 姓名與聯絡資訊 */}
              <div>
                <h3 className="font-serif text-3xl font-bold text-slate-900 tracking-wide">{PROFESSOR.name}</h3>
                <p className="mt-1 text-brand-600 font-semibold text-lg">{PROFESSOR.title}</p>
                <div className="mt-4 flex flex-col items-start gap-2 text-base text-slate-600">
                  <a href={telHref(phone)} className="flex items-center gap-2 hover:text-brand-600">
                    <Phone size={15} className="text-brand-600" /> {phone}
                  </a>
                  <ContactMenu buttonClass="flex items-center gap-2 hover:text-brand-600 break-all text-left">
                    <Mail size={15} className="text-brand-600" /> {email}
                  </ContactMenu>
                  <span className="flex items-center gap-2">
                    <MapPin size={15} className="text-brand-600 flex-shrink-0" /> {office}
                  </span>
                </div>
              </div>

              {/* 學歷背景 */}
              <div>
                <SubHeading icon={GraduationCap}>{TEXT.professorSections.education}</SubHeading>
                <InfoList items={PROFESSOR.education} />
              </div>
            </div>
          </div>

          {/* 研究架構圖（內容在 labData.js 的 RESEARCH_FRAMEWORK） */}
          <div className="px-6 md:px-10 py-8 border-t border-slate-200">
            <SubHeading icon={Target}>{RESEARCH_FRAMEWORK.title}</SubHeading>
            <p className="-mt-2 mb-6 text-base text-slate-500">{RESEARCH_FRAMEWORK.subtitle}</p>
            <ResearchFramework />
          </div>

          {/* 工作經歷 */}
          <div className="px-6 md:px-10 py-8 border-t border-slate-200">
            <SubHeading icon={Briefcase}>{TEXT.professorSections.experience}</SubHeading>
            <InfoList items={PROFESSOR.experience} />
          </div>

          {/* 榮譽與獎項 */}
          <div className="px-6 md:px-10 py-8 border-t border-slate-200">
            <SubHeading icon={Trophy}>
              {TEXT.professorSections.honors}
            </SubHeading>
            <InfoList items={honors} />
            {PROFESSOR.honors.length > TEXT.honorsPreview && (
              <button
                type="button"
                onClick={() => setShowAllHonors((v) => !v)}
                className="mt-5 text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                {showAllHonors ? SITE.ui.collapse : `${SITE.ui.showAll}（${PROFESSOR.honors.length}）`}
              </button>
            )}
          </div>
        </Reveal>

        {/* 學生 */}
        <div className="space-y-20">
          {/* 碩士班 */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <h3 className="font-serif text-2xl font-bold text-slate-800">{TEXT.masters.title}</h3>
              <GraduateButton onClick={() => setGraduateType('masters')} />
            </div>

            <div className="space-y-10">
              {mastersByYear.map(({ year, members }) => (
                <div key={year}>
                  <h4 className="text-lg font-semibold text-slate-700 mb-4">{year}{TEXT.mastersYearSuffix}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {members.map((m) => <StudentCard key={m.name} member={m} />)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 在職專班 */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <h3 className="font-serif text-2xl font-bold text-slate-800">{TEXT.professional.title}</h3>
              <GraduateButton onClick={() => setGraduateType('professional')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {TEAM.professional.map((m) => <ProfessionalCard key={m.name} member={m} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {graduateType && (
        <Modal
          title={graduateType === 'masters' ? TEXT.graduates.mastersTitle : TEXT.graduates.professionalTitle}
          maxWidth="max-w-4xl"
          onClose={() => setGraduateType(null)}
        >
          <GraduateList list={TEAM.graduates[graduateType] || []} />
        </Modal>
      )}

      <ScrollTopButton />
    </>
  );
};

export default TeamPage;
