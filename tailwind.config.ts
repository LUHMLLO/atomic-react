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
        'surface': {
          50: '#f5f5f6',
          100: '#e5e6e8',
          200: '#acadb4',
          300: '#acadb4',
          400: '#83858d',
          500: '#686a72',
          600: '#595a61',
          700: '#4c4d52',
          800: '#434347',
          900: '#3b3b3f',
          950: '#242428',
        },
      },
    }

  },
  plugins: [],
}