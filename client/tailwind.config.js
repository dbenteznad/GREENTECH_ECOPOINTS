/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Home': "url('/public/circulo.png') bg-none-repeat"
        }

    },
  },
  plugins: [],
}