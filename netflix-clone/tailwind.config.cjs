/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        Netflix: "url('https://i.imgur.com/e1hLQ2m.png')",
        transparencia: 'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61 ),#111)'
      }
    },
  },
  plugins: [],
}
