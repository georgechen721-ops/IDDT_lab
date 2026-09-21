import React from 'react';
import { asset } from '../utils/asset';

// 碩士班學生卡片（照片 1:1，四周留白邊）
export const StudentCard = ({ member }) => (
  <div className="bg-white rounded-xl border border-slate-200 hover:border-brand-600 hover:shadow-md transition p-3 group">
    <div className="aspect-square rounded-lg bg-slate-100 overflow-hidden">
      <img
        src={asset(member.image)}
        alt={member.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="pt-3 pb-1 text-center">
      <h4 className="text-base font-semibold text-slate-800">{member.name}</h4>
      <p className="mt-1 text-sm text-slate-500">{member.interest}</p>
    </div>
  </div>
);

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
