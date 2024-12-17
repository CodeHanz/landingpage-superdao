/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      PTmono: ['PT mono'],
    },
    extend: {
      colors: {
        primary: '#FFD600',
        secondary: '#11151A',
        gray1: '#151A1F',
        gray2: '#2C3135',
      },
      screens: {
        'xl': '1320px',
      },
    },
  },
  plugins: [],
}

