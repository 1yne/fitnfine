/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#264653",
        secondBackground: "#2A9D8F",
        secondBackgroundHover: "#218074",
        logo: "#E9C46A"
      },
    },
  },
  plugins: [],
};
