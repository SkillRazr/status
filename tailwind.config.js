/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#1E1E1E",
      },
      animation: {
        blink: "blink 2s ease-in-out 2",
      },
    },
  },
  plugins: [],
};
