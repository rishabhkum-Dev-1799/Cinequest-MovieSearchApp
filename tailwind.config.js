/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text_primary:"#fff",
        input_bg_dark:"#fff",
        navbar_bg:"#2c3e50"
      }
    },
  },
  plugins: [],
}

