/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
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
        darkBG: "#121212",
        cardBG: "#353536",
        cardBGHover: "#494a4a",
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      },
    },
    screens: {
      desktop: "801px",
      mobile: {
        max: "800px",
      },
      profileMobile: {
        max: "569px",
      },
      profileDesktop: "570px",
      workoutModalMobile: {
        max: "519px",
      },
      workoutModalDesktop: "520px",
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'selector',
};
