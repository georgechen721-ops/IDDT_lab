// "(03)-5715131 #42656" → "tel:035715131,42656"（手機撥號時會自動轉分機）
export const telHref = (phone) => {
  const [main, ext] = phone.split('#');
  const digits = main.replace(/\D/g, '');
  return `tel:${digits}${ext ? ',' + ext.replace(/\D/g, '') : ''}`;
};
