/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        login:{50:"#FF698D",100:"F5F5F5"},
        forget:{50:"#FF698D"},

      }
    },
  },
  plugins: [],
}