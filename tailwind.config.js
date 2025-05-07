/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url(/src/assets/images/more/3.png)",
        'nav-img': "url(/src/assets/images/more/15.jpg)"
      }
    },
  },
  plugins: [require("daisyui")],
};