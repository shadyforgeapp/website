/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"', 'sans-serif'],
        Lato: ['"Lato"', 'sans-serif']
      },
      colors: {
        'chocy': '#4C3635',
        'beige': '#FFF7E6'
      }
    },
  },
  plugins: [],
};
