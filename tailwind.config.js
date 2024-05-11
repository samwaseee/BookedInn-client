/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / #b99d75)',
        secondary: 'rgb(var(--color-secondary) / #53624e)',
      },
      fontFamily: {
        jost: "'Jost', sans-serif",
        mar: "'Marcellus', serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}