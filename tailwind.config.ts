import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          asap:'var(--font-asap)',
          ibmsans:'var(--font-ibmsans)',
          futura:'var(--font-futura)',
          poppins:'var(--font-poppins)',
          kamerik:'var(--font-kamerik)',
      },
      borderRadius:{
        bvrounded:"8px"
      },
      backgroundColor:{
        "bvprimary":"black",
      },
      textColor:{
        "bvlight":"white",
        "bvdarkmain":"rgb(51 65 85)",
        "bvgray":"#9A9A9A"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "desktop":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bg.webp')",
        "mobile":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bgmobile.webp')",
        "tablet":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bgtablet.webp')",
        "minidesktop":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bgminidesktop.webp')",
        "cardloading":"linear-gradient(120deg,rgb(30,30,30) ,rgb(33,33,33), rgb(38,38,38),rgb(30,30,30))"
      },
      keyframes:{
        cardloading:{
          "100%":{
            "background-position":"-100%"
          }
        }
      },
      animation:{
        "card-loading":"cardloading 1s linear infinite"
      },
      screens:{
        
      }
    },
  },
  plugins: [],
};
export default config;
