/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis:['Dosis', 'sans-serif'],
      },
      colors: {
        'weather-card' : 'rgba(72, 49, 157, 0.2)',
        'weather-card-hover' : '#48319D',
        ''
      }
    },
  },
  plugins: [],
}