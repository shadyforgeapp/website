/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"', 'sans-serif'],
        Lato: ['"Lato"', 'sans-serif'],
        PotraE0Ye: ["Potra-E0Ye"],
        Veselka4F: ["Veselka4F"],
      },
      colors: {
        'chocy': '#4C3635',
        'beige': '#FFF7E6'
      }
    },
  },
  plugins: [],
};
