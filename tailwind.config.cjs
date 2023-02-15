/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#264653",
        colorTwo: "#2A9D8F",
        colorTwoHover: "#218074"
      },
    },
  },
  plugins: [],
};
