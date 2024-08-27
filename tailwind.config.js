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
      xs: "320px", // Maxsus xs breakpoint (mobil qurilmalar uchun)
      sm: "380px", // Maxsus sm breakpoint (kichik mobil qurilmalar uchun)
      md: "768px", // Standart md breakpoint (planshetlar uchun)
      lg: "1024px", // Standart lg breakpoint (kichik noutbuklar uchun)
      xl: "1280px", // Standart xl breakpoint (katta ekranli noutbuklar uchun)
      "2xl": "1536px", // Standart 2xl breakpoint (katta monitorlar uchun)
      "3xl": "1440px" // Maxsus 3xl breakpoint (oraliq katta ekranlar uchun)
    }
  },

  plugins: []
};
