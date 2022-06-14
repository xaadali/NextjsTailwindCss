module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        risque: ["Risque", "cursive"],
      },
      colors: {
        bgColor: "#00523F",
        themeColor: "#FFC42A",
        bodyColor: "#01785c",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/Rectangle.svg')",
      },
      clipPath: {
        mypolygon: "polygon(0 46%, 100% 0, 100% 100%, 0% 100%)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-clip-path"),
    //  require("@tailwindcss/forms")
  ],
};
