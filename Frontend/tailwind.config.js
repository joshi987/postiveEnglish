/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography'),],
}

