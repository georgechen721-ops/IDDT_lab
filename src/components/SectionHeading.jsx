import React from 'react';

// 每個區塊共用的大標題（明體）
const SectionHeading = ({ title, subtitle, className = 'mb-10' }) => (
  <div className={className}>
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-wide">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-500">{subtitle}</p>}
  </div>
);

export default SectionHeading;
