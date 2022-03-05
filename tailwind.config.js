module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    darkMode: "class",
    extend: {
      colors: {
        lime: {
          50: "#F9FFFB",
          // 500: "#2AB939",
          500: "#357D4D",
          600: "#357D4D",
          // 600: "#048317",
        },
        grey: {
          500: "#202020",
        },
      },
    },
  },

  plugins: [],
};
