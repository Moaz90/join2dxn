/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'Cairo', 'Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
};