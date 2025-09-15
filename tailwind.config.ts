import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  container: {
    padding: {
      DEFAULT: '1rem',
      sm: '1rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '5rem',
    },
  },
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      almarai: ["Almarai", "sans-serif"],
      staatliches: ["Staatliches", "cursive"],
      fraunces: ["Fraunces", "serif"],
    },
    colors: {
      primary: "#0056B1",
      subPrimary: "#0055B8",
      secondray: "#F1E9D2",
      primaryDark: "#00448C",
      blue_gray : "#F0F5F9",
      bold_gray: "#4D4D4D",
      gray1: '#4D4D4D',
      gold: "#F2AB37",
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    animation: {
      slideLeft: "slideLeft 6s infinite",
      slideRight: "slideRight 6s infinite",
      underline: "moveBg 2s linear infinite",
       moveX: 'moveX 2s ease-in-out infinite',
      "slow-zoom": "slowZoom 50s infinite", 
        moveXReverse: "moveXReverse 2s ease-in-out infinite",
    },
    keyframes: {
      slideLeft: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(100%)" },
      },
      slideRight: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(100%)" },
      },
      moveBg: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
      slowZoom: {                      // انقل هذا من theme.keyframes هنا
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.8)" },
      },
       moveX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' }, // يمين 20px
        },
         moveXReverse: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" }, // يسار
        },
    },
  },
},

  plugins: [
        require("tailwindcss-rtl"),
  ],
} satisfies Config;
