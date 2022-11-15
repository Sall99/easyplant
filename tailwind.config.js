/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {},
        gray: {},
      },
      fontFamily: {},
      borderRadius: {
        xs: "0.2rem",
        sm: "0.4rem",
        md: "0.6rem",
        lg: "0.8rem",
        xl: "1rem",
        "2xl": "1.2rem",
      },
    },
  },
  plugins: [],
};
