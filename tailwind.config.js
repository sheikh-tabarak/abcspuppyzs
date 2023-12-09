/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./**/*.{html,js}",
    "./**/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i tailwind.css -o ./utilities/css/tailwind-output.css --watch
