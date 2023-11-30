/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#ffd700',
      'secondary': '#f2f5ff',
      'background-primary': '#ffe4c4',
      'background-secondary': '#f3f9f8',
      'text-primary': '#333333',
      'text-light': '#6d6875',
      'text-dark': '#1f1f1f',
      'border': '#4c4b57'
    },
    extend: {},
  },
  plugins: [],
}

