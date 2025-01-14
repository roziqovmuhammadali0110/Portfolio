/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Comfortaa", "sans-serif"]
    },
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(-100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 }
      }
    },
    animation: {
      slideIn: "slideIn 1s ease-in-out"
    },
    screens: {
      xs: "320px",
      sm: "380px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1440px"
    }
  },

  plugins: []
};
