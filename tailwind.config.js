/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef6f0",
          100: "#dce8de",
          200: "#c0d3c4",
          300: "#96b39a",
          400: "#6f9274",
          500: "#56785a",
          600: "#426047",
          700: "#334a36",
          800: "#243427",
          900: "#172218",
        },
        sand: {
          50: "#fcfaf4",
          100: "#f5efe0",
          200: "#e7dbc1",
          300: "#d9c89f",
          400: "#c0ab73",
          500: "#a68d55",
          600: "#8a7446",
          700: "#695833",
          800: "#473c24",
          900: "#2c2618",
        },
      },
      boxShadow: {
        soft: "0 20px 50px rgba(34, 57, 35, 0.08)",
        glow: "0 24px 60px rgba(87, 120, 90, 0.14)",
      },
      backgroundImage: {
        "organic-grid":
          "radial-gradient(circle at 1px 1px, rgba(83, 117, 88, 0.14) 1px, transparent 0)",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
