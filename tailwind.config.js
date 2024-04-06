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
        input_bg_dark:"#222"
      }
    },
  },
  plugins: [],
}

