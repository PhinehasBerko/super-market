/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex:{
        full:"0 0 100%"
      },
      colors:{
        whiteText:'#fff',
        darkText:"#000000",
        lightText:"#9b9b9b",
        greenText:"#1d8221",
        redText:"#E02B2B",
        skyText:'#32BDE8'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

