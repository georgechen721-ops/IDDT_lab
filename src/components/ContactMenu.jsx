import React, { useEffect, useRef, useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { PROFESSOR, SITE } from '../data/labData';

const EMAIL = PROFESSOR.contact.email;
const TEXT = SITE.contactMenu;
const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

// 複製文字：新版瀏覽器用 clipboard API，舊的用備用方法
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  }
};

// 三個選項（手機選單直接列出，其他地方放在下拉選單裡）
export const ContactOptions = ({ onDone, itemClass }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    if (await copyText(EMAIL)) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onDone?.();
      }, 1200);
    }
  };
  return (
    <>
      <a href={gmailHref} target="_blank" rel="noopener noreferrer" onClick={() => onDone?.()} className={itemClass}>
        <ExternalLink size={16} className="flex-shrink-0" /> {TEXT.gmail}
      </a>
      <a href={`mailto:${EMAIL}`} onClick={() => onDone?.()} className={itemClass}>
        <Mail size={16} className="flex-shrink-0" /> {TEXT.mailApp}
      </a>
      <button type="button" onClick={handleCopy} className={`${itemClass} w-full text-left`}>
        {copied ? <Check size={16} className="flex-shrink-0 text-green-600" /> : <Copy size={16} className="flex-shrink-0" />}
        {copied ? TEXT.copied : TEXT.copy}
      </button>
    </>
  );
};

// 下拉選單：點按鈕打開；點外面、按 Esc 或選完就關閉
// align：選單對齊按鈕的左邊或右邊；direction：往下或往上展開
const ContactMenu = ({ children, buttonClass = '', align = 'left', direction = 'down' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('touchstart', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('touchstart', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-haspopup="menu" className={buttonClass}>
        {children}
      </button>
      {open && (
        <div
          role="menu"
          className={`absolute z-50 w-60 py-1.5 bg-white text-slate-700 rounded-lg border border-slate-200 shadow-lg animate-fade-in
            ${align === 'right' ? 'right-0' : 'left-0'}
            ${direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
        >
          <ContactOptions
            onDone={() => setOpen(false)}
            itemClass="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-brand-50 hover:text-brand-700 transition-colors"
          />
        </div>
      )}
    </div>
  );
};

export default ContactMenu;
