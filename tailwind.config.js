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
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    //  require("@tailwindcss/forms")
  ],
};
