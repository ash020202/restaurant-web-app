/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#c49b63",
        gray: "gray",
        borderBtm: "rgba(255, 255, 255, 0.1)",
        bg: "rgba(0, 0, 0, 0.5)",
        even: "#b08b59",
      },
      width: {
        custom: "calc(100% - 40px)",
      },
    },
  },
  plugins: [],
};
