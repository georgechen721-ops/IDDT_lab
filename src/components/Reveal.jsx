import React, { useEffect, useRef, useState } from 'react';

// 捲動到畫面裡時淡入一次，之後不再重複播放
// 手機上（<md）則立即顯示，不用等待滑動
// 用法：<Reveal>...要淡入的內容...</Reveal>
const Reveal = ({ children, className = '', as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const el = ref.current;

    // 手機上直接顯示，不用 IntersectionObserver
    if (isMobile) {
      setShown(true);
      return;
    }

    // 桌面上使用 IntersectionObserver
    if (!el || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect(); // 只播一次
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
