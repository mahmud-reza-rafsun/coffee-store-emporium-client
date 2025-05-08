/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url(/src/assets/images/more/3.png)",
        'nav-img': "url(/src/assets/images/more/15.jpg)",
        'coffee-dark': 'linear-gradient(135deg, #1c1c1c, #2f2f2f, #3b2f2f, #4b3b3b)',
      }
    },
  },
  plugins: [require("daisyui")],
};