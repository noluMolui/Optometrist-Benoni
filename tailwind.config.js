/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1d4ed8',
          blueDark: '#1e3a8a',
          green: '#16a34a',
          mint: '#e8f8ef',
          sky: '#eaf3ff',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        hero: '0 20px 40px rgba(21, 101, 192, 0.08)',
      },
    },
  },
  plugins: [],
};
