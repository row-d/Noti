/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        50: "#e8e8e8",
        100: "#ebebeb",
        200: "#d1d1d1",
        300: "#9e9e9e",
        400: "#6e6e6e",
        500: "#424242",
        600: "#1f1f1f",
        700: "#121212",
        800: "#121212",
        900: "#121212",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
