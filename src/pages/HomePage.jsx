import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES, RESEARCH_AREAS } from '../data/labData';

// ── Research Data ─────────────────────────────────────────────────────────────
const RESEARCH_DATA = RESEARCH_AREAS;

// ── Placeholder SVG Icons ─────────────────────────────────────────────────────
const PlaceholderIcons = [
  () => (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
      <rect x="10" y="20" width="25" height="40" rx="3" stroke="#0891B2" strokeWidth="2" />
      <rect x="45" y="20" width="25" height="40" rx="3" stroke="#0891B2" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M35 40H45" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="22" cy="36" r="4" fill="#A5F3FC" opacity="0.6" />
      <circle cx="58" cy="36" r="4" stroke="#0891B2" strokeWidth="1.5" />
    </svg>
  ),
  () => (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
      <circle cx="20" cy="40" r="6" fill="#A5F3FC" opacity="0.7" />
      <circle cx="40" cy="20" r="6" fill="#A5F3FC" opacity="0.7" />
      <circle cx="60" cy="40" r="6" fill="#A5F3FC" opacity="0.7" />
      <circle cx="40" cy="60" r="6" fill="#A5F3FC" opacity="0.7" />
      <path d="M26 40H34M46 40H54" stroke="#0891B2" strokeWidth="1.5" />
      <path d="M40 26V34M40 46V54" stroke="#0891B2" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="8" stroke="#0891B2" strokeWidth="2" />
    </svg>
  ),
  () => (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
      <polyline points="10,55 22,35 34,45 46,25 58,38 70,20" stroke="#0891B2" strokeWidth="2" fill="none" />
      <circle cx="46" cy="25" r="4" fill="#A5F3FC" />
      <line x1="46" y1="25" x2="46" y2="60" stroke="#A5F3FC" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M38 65L46 50L54 65Z" fill="#0891B2" opacity="0.5" />
    </svg>
  ),
  () => (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
      <rect x="8" y="30" width="20" height="20" rx="3" stroke="#0891B2" strokeWidth="2" />
      <rect x="52" y="30" width="20" height="20" rx="3" stroke="#0891B2" strokeWidth="2" />
      <rect x="30" y="10" width="20" height="20" rx="3" fill="#A5F3FC" opacity="0.4" stroke="#0891B2" strokeWidth="2" />
      <rect x="30" y="50" width="20" height="20" rx="3" stroke="#0891B2" strokeWidth="2" />
      <path d="M28 40H30M50 40H52" stroke="#0891B2" strokeWidth="1.5" />
      <path d="M40 30V20M40 50V60" stroke="#0891B2" strokeWidth="1.5" />
    </svg>
  ),
];

// ── Carousel ──────────────────────────────────────────────────────────────────
function ResearchCarousel({ images, placeholderIdx }) {
  const [slide, setSlide] = useState(0);
  const total = images.length;
  const PlaceholderIcon = PlaceholderIcons[placeholderIdx % PlaceholderIcons.length];

  const go = (i) => setSlide((i + total) % total);

  return (
    <div style={{ position: 'relative', width: '100%', height: 200, borderRadius: 10, overflow: 'hidden', background: '#f1f5f9', flexShrink: 0, marginBottom: '1rem' }}>
      {/* Track */}
      <div style={{ display: 'flex', height: '100%', transform: `translateX(-${slide * 100}%)`, transition: 'transform 0.35s ease' }}>
        {images.map((img, i) => (
          <div key={i} style={{ minWidth: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {img.src
              ? <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <div style={{ opacity: 0.25 }}><PlaceholderIcon /></div>
            }
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      {total > 1 && (
        <>
          <button
            onClick={() => go(slide - 1)}
            style={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.88)', border: '0.5px solid rgba(0,0,0,0.15)', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 16, zIndex: 2 }}
          >‹</button>
          <button
            onClick={() => go(slide + 1)}
            style={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.88)', border: '0.5px solid rgba(0,0,0,0.15)', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 16, zIndex: 2 }}
          >›</button>
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5 }}>
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => go(i)}
              style={{ width: 6, height: 6, borderRadius: '50%', background: i === slide ? '#0891B2' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'background 0.2s' }}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <div style={{ position: 'absolute', top: 8, right: 10, fontSize: 11, color: 'rgba(255,255,255,0.9)', background: 'rgba(0,0,0,0.28)', padding: '2px 8px', borderRadius: 999 }}>
        {slide + 1} / {total}
      </div>
    </div>
  );
}

// ── Detail Panel ──────────────────────────────────────────────────────────────
function ResearchDetailPanel({ item, itemIndex }) {
  if (!item) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, color: '#94a3b8', fontSize: 14 }}>
        <span style={{ fontSize: 22, opacity: 0.3 }}>←</span>
        <span>點擊左側了解各研究主題</span>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto' }}>
      <ResearchCarousel images={item.images} placeholderIdx={itemIndex} />

      <div style={{ fontSize: 17, fontWeight: 'bold', color: '#0f172a', marginBottom: 6 }}>{item.title}</div>

      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
        {item.tags.map((t) => (
          <span key={t} style={{ fontSize: 11, padding: '2px 9px', borderRadius: 999, background: '#0891B2', color: '#ffffff', border: '0.5px solid #0891B2' }}>{t}</span>
        ))}
      </div>

      <p style={{ fontSize: 13.5, lineHeight: 1.75, color: '#475569', marginBottom: 8 }}>{item.body}</p>

      <ul style={{ paddingLeft: '1.1rem', fontSize: 13.5, lineHeight: 1.75, color: '#475569', margin: 0 }}>
        {item.points.map((p) => (
          <li key={p} style={{ marginBottom: 3 }}> • {p}</li>
        ))}
      </ul>
    </div>
  );
}

// ── Semicircle Map ────────────────────────────────────────────────────────────
function SemicircleMap({ selected, onSelect }) {
  const BOX_X = 108;
  const BOX_W = 170;
  const BOX_H = 70;
  const CENTERS_Y = [107, 207, 307, 407];

  return (
    <svg viewBox="0 0 300 480" width="300" height="480" style={{ overflow: 'visible' }}>
      {/* Boxes */}
      {RESEARCH_DATA.map((item, i) => {
        const cy = CENTERS_Y[i];
        const isActive = selected === i;
        const xOffset = (i === 0 || i === 3) ? -12 : 0;
        const boxX = BOX_X + xOffset;
        return (
          <g key={i} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
            <rect
              x={boxX} y={cy - BOX_H / 2}
              width={BOX_W} height={BOX_H}
              rx="5"
              fill="#0F3460"
              stroke={isActive ? '#0891B2' : 'none'}
              strokeWidth={isActive ? 2.5 : 0}
              opacity={selected === -1 || isActive ? 1 : 0.7}
              style={{ transition: 'opacity 0.15s' }}
            />
            <text x={boxX + BOX_W / 2} y={cy - 4} textAnchor="middle" fontSize="16" fontWeight="500" fill="#FFFFFF" fontFamily="sans-serif">
              {item.title}
            </text>
            <text x={boxX + BOX_W / 2} y={cy + 18} textAnchor="middle" fontSize="16" fill="#A5F3FC" fontFamily="sans-serif">
              {item.subtitle}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── HomePage ──────────────────────────────────────────────────────────────────
const HomePage = ({ setActiveTab }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedResearch, setSelectedResearch] = useState(-1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const visibleSlides = isMobile ? 1 : 3;
  const slideDisplay = Array.from({ length: visibleSlides }, (_, idx) => SLIDES[(currentSlide + idx) % SLIDES.length]);

  const handleResearchSelect = (idx) => {
    setSelectedResearch(idx === selectedResearch ? -1 : idx);
  };

  return (
    <section className="animate-in fade-in duration-500">
      {/* Hero */}
      <div
        className="relative py-28 px-6 overflow-hidden text-white"
        style={{
          backgroundImage: 'url(/IDDT_lab/cover.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0F3460]/60 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="bg-[#0891B2]/20 inline-block px-4 py-1 border border-[#0891B2]/40 rounded-full text-[#c7f0ff] text-lg font-semibold mb-8">
            工業工程與工程管理學系｜國立清華大學
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            智慧決策與數位雙生
          </h1>
          <p className="text-3xl text-[#89c9df] font-semibold mb-8">
            Intelligence Decision & Digital Twin Lab
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => setActiveTab('team')}
              className="bg-white text-[#0F3460] px-8 py-4 rounded-xl font-bold hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              探索研究團隊
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className="bg-transparent text-white border-2 border-white/70 px-8 py-4 rounded-xl font-bold hover:-translate-y-1 hover:bg-white/10 transition-all"
            >
              相關學術研究
            </button>
          </div>
        </div>
      </div>

      {/* ── Research Section (semicircle mindmap) ── */}
      <div id="research-section" className="bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">核心研究領域</h2>
            <div className="w-20 h-2 bg-[#0891B2] rounded-full" />
          </div>

          <div style={{ display: 'flex', minHeight: 500, borderRadius: 16, overflow: 'hidden' }}>
            {/* Left: research boxes */}
            <div style={{ width: 300, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 0', backgroundImage: 'url(/IDDT_lab/research_background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <SemicircleMap selected={selectedResearch} onSelect={handleResearchSelect} />
            </div>

            {/* Right: detail panel */}
            <div style={{ flex: 1, border: '0.5px solid #e2e8f0', borderRadius: 16, padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
              <ResearchDetailPanel
                item={selectedResearch >= 0 ? RESEARCH_DATA[selectedResearch] : null}
                itemIndex={selectedResearch}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 研究室日常輪播 ── */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">研究室日常</h2>
            <div className="w-20 h-2 bg-[#0891B2] rounded-full" />
          </div>
          <div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4">
              {slideDisplay.map((slide, idx) => (
                <div key={idx} className="relative rounded-[20px] overflow-hidden aspect-[4/3] border border-slate-200 shadow-sm">
                  <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-bold">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={() => setCurrentSlide((current) => (current - 1 + SLIDES.length) % SLIDES.length)}
                className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-slate-700" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button
                onClick={() => setCurrentSlide((current) => (current + 1) % SLIDES.length)}
                className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
                aria-label="Next slide"
              >
                <ChevronRight size={16} className="text-slate-700" />
              </button>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from({ length: SLIDES.length }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-[#0891B2] w-8' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;