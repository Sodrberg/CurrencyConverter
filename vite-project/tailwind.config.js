/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Poppins", "sans-serif"]
      },
      colors: {
        customPurple: '#DED4E8',
        customYellow: '#E8BA40',
        customRed: '#C7395F',
        customGreen: '#80C4B7'
      },
  },
},
  plugins: [],
};