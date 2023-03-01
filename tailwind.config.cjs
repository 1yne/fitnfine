/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#264653",
        secondBackground: "#029987",
        secondBackgroundHover: "#218074",
        logo: "#e6b335",
        logoHover: "#c99d2c",
        orangeText: "#e35936",
        orangeTextHover: "#c74e30",
        blackBackground: "#1c1c1c",
        workoutCardBG: "#353536",
        workoutCardBGHover: "#494a4a",
      },
    },
  },
  plugins: [],
};
