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
      },
      screens: {
        'sm': '480px',
        'md': '700px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

