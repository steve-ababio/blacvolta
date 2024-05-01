import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "desktop":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bg.webp')",
        "mobile":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bgmobile.webp')",
        "tablet":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bgtablet.webp')",
        "minidesktop":"linear-gradient(to bottom, rgba(7, 7, 7, 0.84),rgba(9, 9, 9, 0.73)), url('/assets/images/bgminidesktop.webp')"
      },
    },
  },
  plugins: [],
};
export default config;
