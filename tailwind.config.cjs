const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
