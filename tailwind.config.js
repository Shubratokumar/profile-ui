/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',    "./node_modules/vue-tailwind-datepicker/**/*.js",
],
  content: [],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.sky,
        },},
  },
  plugins: [require("@tailwindcss/forms")],
}

