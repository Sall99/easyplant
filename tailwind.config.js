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
          200: "var(--gray-200)",
          300: "var(--gray-300)",
        },
        green: {
          100: "var(--green-100)",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/public/img/Hero.png')",
      },
      fontFamily: {
        fraunes: ["Fraunces", "serif"],
      },
      fontSize: {
        _66: ["66px", "76px"],
        _40: ["40px", "61.65px"],
      },

      letterSpacing: {
        _1: "1px",
        _2: "2px",
      },
      lineHeight: {
        "_17.26": "17.26px",
      },
      borderRadius: {
        _6: "6px",
      },
      maxWidth: {
        _1140: "1140px",
      },
      spacing: {
        _6: "6px",
        _73: "73px",
        _100: "100px",
        _102: "102px",
        _112: "112px",
        _114: "114px",
        _132: "132px",
        _172: "172px",
        _200: "200px",
        _202: "202px",
        _205: "205px",
        _270: "270px",
        _314: "314px",
        _371: "371px",
        _409: "409px",
        _700: "700px",
        _592: "592px",
      },
    },
  },
  plugins: [],
};
