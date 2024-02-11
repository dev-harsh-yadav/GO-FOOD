/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "card-container": "400px", // Set your desired fixed height
      },
    },
    fontFamily: {
      sans: ["font-mono"],
    },
  },
  plugins: [],
};
