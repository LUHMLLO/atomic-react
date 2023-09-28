/** @type {import('tailwindcss').Config} */
import { Scales } from "./src/commons/logic/scaling"

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: Scales,
    fontSize: Scales,
    spacing: Scales,

    fontFamily: {
      'sans': "'Roboto', sans-serif",
      'display': "'Roboto', sans-serif",
      'body': "'Roboto', sans-serif",
    },

    extend: {
      gridTemplateColumns: {
        'authLayout': '1fr minmax(auto, 24vw)',
      },
      colors: {
        'accent': {
          50: '#E8FFE4',
          100: '#CCFFC5',
          200: '#9DFF92',
          300: '#5FFF53',
          400: '#10FB06',
          500: '#06E200',
          600: '#00B501',
          700: '#028903',
          800: '#086C0A',
          900: '#0C5B0F',
          950: '#003304',
        },
      },
    }

  },
  plugins: [],
}