/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          robotoFlex: ['Roboto Flex', 'sans-serif'],
          rockSalt: ['rock Salt', 'cursive'],
    },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to top, rgba(53, 44, 51, 0), rgba(53, 44, 51, 1))',
          'gradient-icons': 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))',
          'gradient-card': 'linear-gradient(to right, rgba(104,104,104,1), rgba(233,105,105,1))',
    },
  },
},
}