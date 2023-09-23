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
      'sans': "'DM Sans', sans-serif",
      'display': "'DM Sans', sans-serif",
      'body': "'DM Sans', sans-serif",
    },

    extend: {
      colors: {
        'accent': {
          50: '',
          100: '#cefecd',
          200: '#6dfd68',
          300: '#9efd9b',
          400: '#3dfc36',
          500: '#0cfb04',
          600: '#0ac903',
          700: '#079702',
          800: '#056402',
          900: '#023201',
          950: '',
        },
      },
    }

  },
  plugins: [],
}