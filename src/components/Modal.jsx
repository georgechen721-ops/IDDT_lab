import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

// 共用彈跳視窗：Esc、點背景、按 X 都能關閉；開著時背景不會捲動
// 用 createPortal 直接掛在 <body> 底下，不管放在哪個元件裡位置都正確
const Modal = ({ title, subtitle, onClose, maxWidth = 'max-w-2xl', children }) => {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeRef.current();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`w-full ${maxWidth} max-h-[85vh] flex flex-col rounded-2xl bg-white shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-4">
          <div>
            <h3 id="modal-title" className="font-serif text-xl font-bold text-slate-900">{title}</h3>
            {subtitle && <p className="mt-0.5 text-sm text-brand-600">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 flex-shrink-0"
            aria-label="關閉"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
