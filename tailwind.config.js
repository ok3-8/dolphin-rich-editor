/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pb-bg":'#253038'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode:'class'
}
