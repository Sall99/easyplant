/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {},
        gray: {
          100: "var(--gray-100)",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/public/img/Hero.png')",
      },
      fontFamily: {
        fraunes: ["Fraunces", "serif"],
      },
      lineHeight: {
        "_17.26": "17.26px",
      },
      borderRadius: {
        xs: "0.2rem",
        sm: "0.4rem",
        md: "0.6rem",
        lg: "0.8rem",
        xl: "1rem",
        "2xl": "1.2rem",
      },
      maxWidth: {
        _1140: "1140px",
      },
      spacing: {
        _700: "700px",
      },
    },
  },
  plugins: [],
};
