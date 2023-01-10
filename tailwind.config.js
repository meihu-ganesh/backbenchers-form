module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        white_A700_7f: "#ffffff7f",
        black_900_7f: "#0000007f",
        gray_400: "#c2c1c1",
        black_900: "#000000",
        black_901: "#070707",
        bluegray_100: "#d9d9d9",
        white_A700: "#ffffff",
      },
      borderRadius: { radius2: "2px", radius10: "10px", radius12: "12px" },
      fontFamily: { aldrich: "Aldrich" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
