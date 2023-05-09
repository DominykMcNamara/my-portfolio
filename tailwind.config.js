/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple':  '#351b3f',
        'skyblue': 'skyblue'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Helvetica', 'serif'],
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)'},
        

      },
    },
  },
  plugins: [],
}