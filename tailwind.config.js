/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {opcaity: 0, transform: 'translateY(30px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
      fontFamily: {
        dosis:['Dosis', 'sans-serif'],
      },
      colors: {
        'primary-text-color': '#fff',
        'secondary-text-color': "rgb(194 194 207)",
        'weather-card' : 'rgba(72, 49, 157, 0.2)',
        'weather-card-hover' : '#48319D',
      },
      backgroundImage: {
        'gradient-primary' : 'linear-gradient(145deg, rgba(46,51,90,0.7) 40%, rgba(28,27,51,0.8) 90%)',
      }
    },
  },
  plugins: [],
}