/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4361ee',
        secondary: '#64748b',
        text: '#ffffff',
      },
      fontFamily: {
        main: 'main, times new roman',
        mainBold: 'main-bold, times new roman',
        mainLight: 'main-light, times new roman'
      }
    },
  },
  plugins: [],
}