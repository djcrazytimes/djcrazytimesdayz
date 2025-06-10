// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.5s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      fontFamily: {
        press: ['"Press Start 2P"', "cursive"],
        mono: ['"Courier New"', "monospace"],
      },
      colors: {
        estoniaBlue: "#0072CE",
        estoniaBlack: "#000000",
        estoniaWhite: "#FFFFFF",
        y2kBlue: "#00C7FF",
        y2kPink: "#FF40A0",
        y2kGreen: "#7FFF00",
      },
    },
  },
  plugins: [],
};
