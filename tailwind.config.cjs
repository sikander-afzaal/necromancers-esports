const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glitch1: "glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite",
        glitch2:
          "glitch 0.3s cubic-bezier(.25,.46,.45,.94) reverse both infinite",
      },
      keyframes: {
        glitch: {
          "0% 100%": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translate(-3px,3px)",
          },
          "40%": {
            transform: "translate(-3px,-3px)",
          },
          "60%": {
            transform: "translate(3px,3px)",
          },
          "80%": {
            transform: "translate(3px,-3px)",
          },
        },
      },
      fontFamily: {
        sans: ["Rajdhani", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: " #a3ff12",
        secondary: "#5e627e",
        tertiary: "#222430",
        success: "#88df00",
        info: "#ced0da",
        warning: "#fc0",
        danger: "#ff1c5c",
        light: "#fff",
        dark: "#151720",
      },
      backgroundImage: {
        bodyBg: "url('/body-bg.jpg')",
      },
      screens: {
        mid: "1180px",
      },
    },
  },
  plugins: [],
};
