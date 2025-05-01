/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
      },
      colors: {
        black: "#000000",
        "black-50": "#1a1a1a",
        "black-100": "#0f0f0f",
        "black-200": "#111111",
        white: "#ffffff",
        "white-50": "#f5f5f5",
        "white-100": "#e5e5e5",
      },
    },
  },
  plugins: [],
};
