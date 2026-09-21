/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 網站主色（介於藍與紫之間）。要換色只要改這裡
      colors: {
        brand: {
          50: '#EEF1FC',
          100: '#DEE3F8',
          200: '#C3CBF2',
          300: '#9FACE9',
          400: '#7483DD',
          500: '#5664D3',
          600: '#4453C8',
          700: '#3743A6',
          800: '#2C3580',
          900: '#1D2458',
        },
      },
      fontFamily: {
        // 標題用明體，內文維持系統黑體
        serif: ['"Noto Serif TC"', '"Songti TC"', '"PMingLiU"', 'serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
