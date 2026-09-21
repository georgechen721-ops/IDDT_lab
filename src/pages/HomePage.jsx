import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, ArrowRight,
  BrainCircuit, CalendarClock, MessagesSquare, Warehouse, ShieldAlert, Network, BarChart3, Factory, Truck, Cpu, Boxes,
} from 'lucide-react';

// 研究領域的 icon（在 labData.js 用 icon: "brain" 這種名稱指定）
const ICONS = {
  brain: BrainCircuit,
  calendar: CalendarClock,
  llm: MessagesSquare,
  warehouse: Warehouse,
  shield: ShieldAlert,
  network: Network,
  chart: BarChart3,
  factory: Factory,
  truck: Truck,
  cpu: Cpu,
};
import { LAB_NAME, LAB_NAME_EN, SLIDES, RESEARCH_AREAS, SITE } from '../data/labData';
import { asset } from '../utils/asset';
import { routeHref } from '../hooks/useHashRoute';
import SectionHeading from '../components/SectionHeading';
import Modal from '../components/Modal';
import Reveal from '../components/Reveal';

// ── 研究領域（icon＋文字，點了跳出完整內容）──────────────────────────────────
function ResearchItem({ item, onOpen }) {
  const Icon = ICONS[item.icon] || Boxes;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group h-full w-full text-left border-t border-slate-300 hover:border-brand-600 pt-6 pb-2 flex flex-col transition-colors"
    >
      <Icon
        size={34}
        strokeWidth={1.5}
        className="text-brand-600/80 group-hover:text-brand-600 transition-colors"
        aria-hidden="true"
      />
      <h3 className="mt-4 font-serif text-xl font-bold text-slate-900">{item.title}</h3>
      <p className="mt-1 text-xs tracking-[0.15em] uppercase text-slate-500">{item.subtitle}</p>
      <p className="mt-4 text-[15px] text-slate-600 leading-relaxed line-clamp-2">{item.body}</p>
      <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-brand-600 transition-colors">
        {SITE.home.researchMore}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
}

// ── 研究領域完整內容（放在彈跳視窗裡）──────────────────────────────────────────
function ResearchDetail({ item }) {
  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">{t}</span>
        ))}
      </div>
      <p className="mt-4 text-[15px] text-slate-700 leading-relaxed">{item.body}</p>
      <h4 className="mt-6 text-sm font-semibold text-slate-800">{SITE.home.researchMore}</h4>
      <ul className="mt-2 space-y-2">
        {item.points.map((p) => (
          <li key={p} className="flex gap-2.5 text-[15px] text-slate-600 leading-relaxed">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── HomePage ──────────────────────────────────────────────────────────────────
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [openResearch, setOpenResearch] = useState(null); // 目前打開的研究領域

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 研究室日常：頁面載入後在背景先把所有照片下載好，輪播換張時就不用再等
  useEffect(() => {
    const preload = () =>
      SLIDES.forEach((s) => {
        const img = new Image();
        img.decoding = 'async';
        img.src = asset(s.url);
      });
    if (document.readyState === 'complete') preload();
    else window.addEventListener('load', preload, { once: true });
    return () => window.removeEventListener('load', preload);
  }, []);

  // 自動輪播；手動切換後重新計時
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((c) => (c + 1) % SLIDES.length), 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const go = (i) => setCurrentSlide((i + SLIDES.length) % SLIDES.length);
  const visibleSlides = Math.min(isMobile ? 1 : 3, SLIDES.length);
  const slideDisplay = Array.from({ length: visibleSlides }, (_, idx) => SLIDES[(currentSlide + idx) % SLIDES.length]);

  return (
    <section className="animate-fade-in">
      {/* Hero */}
      <div
        className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden text-white bg-brand-900"
        style={{
          backgroundImage: `url(${asset(SITE.heroImage)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand-900/70 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wider">{LAB_NAME}</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-brand-100">{LAB_NAME_EN} Lab</p>
          <p className="mt-6 text-sm md:text-base text-white/75 tracking-wide">{SITE.department}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={routeHref('team')}
              className="bg-white text-brand-900 px-7 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              {SITE.heroButtons.team}
            </a>
            <a
              href={routeHref('publications')}
              className="text-white border border-white/70 px-7 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {SITE.heroButtons.publications}
            </a>
          </div>
        </div>
      </div>

      {/* 核心研究領域 */}
      <div id="research-section" className="bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <Reveal>
          <SectionHeading title={SITE.home.researchTitle} subtitle={SITE.home.researchSubtitle} className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {RESEARCH_AREAS.map((item) => (
              <ResearchItem key={item.id || item.title} item={item} onOpen={() => setOpenResearch(item)} />
            ))}
          </div>
          </Reveal>
        </div>
      </div>

      {openResearch && (
        <Modal title={openResearch.title} subtitle={openResearch.subtitle} onClose={() => setOpenResearch(null)}>
          <ResearchDetail item={openResearch} />
        </Modal>
      )}

      {/* 研究室日常 */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
          <SectionHeading title={SITE.home.galleryTitle} />
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {slideDisplay.map((slide) => (
                <div
                  key={slide.url}
                  className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-200 animate-fade-in"
                >
                  <img src={asset(slide.url)} alt={slide.title} decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                    <h3 className="text-white text-base font-semibold">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => go(currentSlide - 1)}
              className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-4 bg-white hover:bg-slate-50 p-2 rounded-full shadow-md border border-slate-200 transition-colors"
              aria-label="上一張"
            >
              <ChevronLeft size={20} className="text-slate-700" />
            </button>
            <button
              onClick={() => go(currentSlide + 1)}
              className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-4 bg-white hover:bg-slate-50 p-2 rounded-full shadow-md border border-slate-200 transition-colors"
              aria-label="下一張"
            >
              <ChevronRight size={20} className="text-slate-700" />
            </button>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.url}
                onClick={() => go(i)}
                aria-label={`第 ${i + 1} 張：${s.title}`}
                aria-current={i === currentSlide}
                className={`h-2.5 rounded-full transition-all ${
                  i === currentSlide ? 'bg-brand-600 w-7' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                }`}
              />
            ))}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
