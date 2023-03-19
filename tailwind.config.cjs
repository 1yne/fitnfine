/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#264653",
        darkGreenHover: "#1b323b",
        teal: "#029987",
        tealHover: "#218074",
        yellow: "#e6b335",
        yellowHover: "#c99d2c",
        orange: "#e35936",
        orangeHover: "#c74e30",
        background: "#1c1c1c",
        cardBG: "#353536",
        cardBGHover: "#494a4a",
      },
    },
    screens: {
      "desktop": "801px",
      "mobile": {
        'max': "800px"
      }
    }
  },
  plugins: [],
};
