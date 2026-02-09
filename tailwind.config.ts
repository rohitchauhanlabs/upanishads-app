import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF7",
          100: "#FFF9E8",
          200: "#FFF3D1",
          300: "#FFEBB3",
        },
        earth: {
          100: "#F5E6D3",
          200: "#E8D5C0",
          300: "#D4B896",
          400: "#C4A07A",
          500: "#A67C52",
          600: "#8B6340",
          700: "#6B4C30",
          800: "#4A3520",
          900: "#2D1F12",
        },
        sage: {
          100: "#E8EDE5",
          200: "#D1DBC9",
          300: "#B5C4AA",
          400: "#8BA37A",
          500: "#6B8A56",
        },
        warmgray: {
          50: "#FAF9F7",
          100: "#F0EEEB",
          200: "#E2DFDA",
          300: "#C8C3BC",
          400: "#A9A298",
          500: "#8B8278",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in-slow": "fadeIn 1.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
