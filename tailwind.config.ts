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
          50: '#ecfdf8',
          100: '#d1faee',
          200: '#a7f3de',
          300: '#6ee7c5',
          400: '#34d3a6',
          500: '#10b98a',
          600: '#05966d',
          700: '#047857',
          800: '#065f46',
          900: '#064e3a',
          950: '#022c20',
        },
      },
    }

  },
  plugins: [],
}