/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        sans: "sans-serif",
        roboto: "Roboto",
        indie: " Indie Flower",
      },
    },
  },
  plugins: [],
};
