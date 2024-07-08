/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorMapHeaderBG: '#dde8f0',
        colorSearchButton: '#028abd',
      },
    },
  },
  plugins: [],
}