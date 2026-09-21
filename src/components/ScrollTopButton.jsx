import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-600 text-white shadow-md hover:bg-brand-700 transition-colors"
      aria-label="回到頂部"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollTopButton;
