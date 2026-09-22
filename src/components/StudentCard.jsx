import React, { useEffect, useState } from 'react';
import { asset } from '../utils/asset';
import { SITE } from '../data/labData';

// 照片輪播：一張張疊在一起，用淡入淡出切換（照片一開始就都載入，換張不會空白）
const PhotoCarousel = ({ photos, name, interval }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // 使用者開了「減少動態效果」就不自動播放，點圓點仍可切換
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || paused) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % photos.length), interval);
    return () => clearInterval(timer);
  }, [photos.length, interval, paused, index]);

  return (
    <div className="relative aspect-square rounded-lg bg-slate-100 overflow-hidden">
      {photos.map((src, i) => (
        <img
          key={src}
          src={asset(src)}
          alt={i === index ? name : ''}
          aria-hidden={i !== index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* 進度圓點：放在照片底部內側，卡片高度才會和其他同學一樣 */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1.5 rounded-full bg-black/30 backdrop-blur-sm"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${name} 第 ${i + 1} 張照片`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

// 碩士班學生卡片（照片 1:1，四周留白邊）
// 資料用 image: "a.jpg" 放一張；用 images: ["a.jpg", "b.jpg", …] 放多張會自動輪播
export const StudentCard = ({ member }) => {
  const photos = member.images?.length ? member.images : [member.image];
  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-brand-600 hover:shadow-md transition p-3 group">
      {photos.length > 1 ? (
        <PhotoCarousel photos={photos} name={member.name} interval={SITE.team.photoInterval || 1000} />
      ) : (
        <div className="aspect-square rounded-lg bg-slate-100 overflow-hidden">
          <img
            src={asset(photos[0])}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="pt-3 pb-1 text-center">
        <h4 className="text-base font-semibold text-slate-800">{member.name}</h4>
        <p className="mt-0.5 text-sm text-slate-500 leading-snug">{member.interest}</p>
      </div>
    </div>
  );
};

// 在職專班學生卡片（直式照片，公司名稱放在名字下方，不會互相遮住）
export const ProfessionalCard = ({ member }) => (
  <div className="bg-white rounded-xl border border-slate-200 hover:border-brand-600 hover:shadow-md transition p-4 flex items-center gap-4">
    <img
      src={asset(member.image)}
      alt={member.name}
      loading="lazy"
      className="w-24 h-32 rounded-lg object-cover flex-shrink-0 bg-slate-100"
    />
    <div className="min-w-0">
      <h4 className="text-base font-semibold text-slate-800">{member.name}</h4>
      <span className="inline-block mt-1 text-xs font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
        {member.company}
      </span>
      <p className="mt-2 text-sm text-slate-500 leading-snug">{member.interest}</p>
    </div>
  </div>
);
