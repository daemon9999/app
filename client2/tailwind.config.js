/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        100: '#1C2D25',
        200: '#5E8069',
        300: '#6C8BA0',
        400: '#E5EDF4',
        500: '#D4D21B',
        600: '#96AA2E',
        700: '#3D5227',
        800: '#29471A',
        900: '#60861C',
        10: '#6B8649',
        20: '#ADC645',
        30: '#7F9B22'
      },
      screens: {
        xs: '480px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }

    },
  },
  plugins: [],
}

