/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver': '#F2F8FF',
        'deepsilver': '#F8F8F9',
        'bermuda': '#0060FF',
      },
    },
  },
  plugins: [],
}