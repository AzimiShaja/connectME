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
        slab: "Roboto Slab",
        merri: "",
        dm: "DM Serif Display",
      },
      colors: {
        whiteYellow: "#FFCC70",
        green: "#04423c",
        whiteGreen: "#e4f6f5",
      },
    },
  },
  plugins: [],
};
