/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bounceslow: "bounce 3s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
