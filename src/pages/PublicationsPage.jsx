import React, { useState } from 'react';
import { BookOpen, Briefcase, Microscope } from 'lucide-react';
import { PUBLICATIONS, SITE } from '../data/labData';
import SectionHeading from '../components/SectionHeading';
import ScrollTopButton from '../components/ScrollTopButton';
import Reveal from '../components/Reveal';

const TEXT = SITE.publications;

const SECTIONS = [
  { id: 'nstc', label: TEXT.nstc, icon: BookOpen },
  { id: 'industry', label: TEXT.industry, icon: Briefcase },
  { id: 'journals', label: TEXT.journals, icon: Microscope },
];

// 從論文文字最後的「(SCI)」「(EI, TSSCI)」自動抓出收錄標籤，並從文字中移除
// 資料照原本的寫法即可，不需要另外填欄位
const INDEX_PATTERN = /\(\s*((?:SSCI|SCI|TSSCI|EI|SCIE|Scopus)(?:\s*,\s*(?:SSCI|SCI|TSSCI|EI|SCIE|Scopus))*)\s*\)\s*\.?/;
const splitIndexes = (raw) => {
  const m = raw.match(INDEX_PATTERN);
  if (!m) return { text: raw, tags: [] };
  const text = raw
    .replace(m[0], '')
    .replace(/,\s*(?=\[)/, '. ') // "pp. 1–35, [in Chinese]" → "pp. 1–35. [in Chinese]"
    .replace(/\s{2,}/g, ' ')
    .trim();
  return { text, tags: m[1].split(',').map((t) => t.trim()) };
};

const scrollToSection = (id) => {
  const el = document.getElementById(`pub-${id}`);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const SectionTitle = ({ id, icon: Icon, children, count }) => (
  <div id={`pub-${id}`} className="flex items-center gap-3 mb-6">
    <Icon size={24} strokeWidth={1.5} className="text-brand-600" aria-hidden="true" />
    <h3 className="font-serif text-2xl font-bold text-slate-800">{children}</h3>
    {count != null && <span className="text-sm text-slate-400">{count}</span>}
  </div>
);

const PublicationsPage = () => {
  const [showAllNstc, setShowAllNstc] = useState(false);
  const [showAllIndustry, setShowAllIndustry] = useState(false);
  const [showAllJournals, setShowAllJournals] = useState(false);

  const nstc = showAllNstc ? PUBLICATIONS.nstc : PUBLICATIONS.nstc.slice(0, TEXT.nstcPreview);
  const industry = showAllIndustry ? PUBLICATIONS.industry : PUBLICATIONS.industry.slice(0, TEXT.industryPreview);
  const journals = showAllJournals ? PUBLICATIONS.journals : PUBLICATIONS.journals.slice(0, TEXT.journalsPreview);

  return (
    <>
      <section className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading title={TEXT.title} className="mb-6" />

        <div className="flex gap-2 flex-wrap mb-14">
          {SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-brand-600 hover:text-brand-600 transition-colors flex items-center gap-2"
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>

        <div className="space-y-20">
          {/* 國科會計畫 */}
          <Reveal>
            <SectionTitle id="nstc" icon={BookOpen} count={PUBLICATIONS.nstc.length}>{TEXT.nstc}</SectionTitle>
            <ol className="border-t border-slate-300 divide-y divide-slate-200">
              {nstc.map((p, i) => (
                <li key={i} className="py-5 flex gap-4 items-start justify-between">
                  <div className="flex gap-4 flex-1 min-w-0">
                    <span className="text-sm text-slate-400 tabular-nums w-7 flex-shrink-0 pt-0.5 text-right">{i + 1}</span>
                    <p className="text-base text-slate-800 leading-relaxed whitespace-pre-line">{p.title}</p>
                  </div>
                  <p className="text-sm text-brand-600 font-semibold tabular-nums ml-4 flex-shrink-0 pt-0.5">{p.date}</p>
                </li>
              ))}
            </ol>
            {PUBLICATIONS.nstc.length > TEXT.nstcPreview && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => {
                    if (showAllNstc) scrollToSection('nstc');
                    setShowAllNstc((v) => !v);
                  }}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:border-brand-600 hover:text-brand-600 transition-colors"
                >
                  {showAllNstc ? SITE.ui.collapse : `${SITE.ui.showAll}（${PUBLICATIONS.nstc.length}）`}
                </button>
              </div>
            )}
          </Reveal>

          {/* 產學合作：公司、計畫名稱、日期 */}
          <Reveal>
            <SectionTitle id="industry" icon={Briefcase} count={PUBLICATIONS.industry.length}>{TEXT.industry}</SectionTitle>
            <ol className="border-t border-slate-300 divide-y divide-slate-200">
              {industry.map((p, i) => (
                <li key={i} className="py-5 flex gap-4">
                  <span className="text-sm text-slate-400 tabular-nums w-7 flex-shrink-0 pt-0.5 text-right">{i + 1}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-brand-600 font-semibold mb-2">{p.partner}</p>
                    <p className="text-base text-slate-800 leading-relaxed mb-2">{p.title}</p>
                    <p className="text-sm text-slate-500 tabular-nums">{p.date}</p>
                  </div>
                </li>
              ))}
            </ol>
            {PUBLICATIONS.industry.length > TEXT.industryPreview && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => {
                    if (showAllIndustry) scrollToSection('industry');
                    setShowAllIndustry((v) => !v);
                  }}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:border-brand-600 hover:text-brand-600 transition-colors"
                >
                  {showAllIndustry ? SITE.ui.collapse : `${SITE.ui.showAll}（${PUBLICATIONS.industry.length}）`}
                </button>
              </div>
            )}
          </Reveal>

          {/* 期刊論文 */}
          <Reveal>
            <SectionTitle id="journals" icon={Microscope} count={PUBLICATIONS.journals.length}>
              {TEXT.journals}
            </SectionTitle>
            <ol className="border-t border-slate-300 divide-y divide-slate-200">
              {journals.map((p, i) => {
                const { text, tags } = splitIndexes(p.title);
                return (
                  <li key={i} className="py-5 flex gap-4">
                    <span className="text-sm text-slate-400 tabular-nums w-7 flex-shrink-0 pt-0.5 text-right">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="text-slate-700 leading-relaxed text-[15px]">{text}</p>
                      {tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {tags.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-semibold tracking-wide px-1.5 py-0.5 rounded border border-brand-200 bg-brand-50 text-brand-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
            {PUBLICATIONS.journals.length > TEXT.journalsPreview && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => {
                    if (showAllJournals) scrollToSection('journals');
                    setShowAllJournals((v) => !v);
                  }}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:border-brand-600 hover:text-brand-600 transition-colors"
                >
                  {showAllJournals ? SITE.ui.collapse : `${SITE.ui.showAll}（${PUBLICATIONS.journals.length}）`}
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <ScrollTopButton />
    </>
  );
};

export default PublicationsPage;
