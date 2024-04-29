/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Russo: ["Russo One", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
      },
    },
    plugins: [],
  },
};
