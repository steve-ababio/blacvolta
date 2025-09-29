import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blacvolta: {
          dark: "hsl(var(--blacvolta-dark))",
          gold: "hsl(var(--blacvolta-gold))",
          "gold-muted": "hsl(var(--blacvolta-gold-muted))",
          accent: "hsl(var(--blacvolta-accent))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
          asap:'var(--font-asap)',
          ibmsans:'var(--font-ibmsans)',
          futura:'var(--font-futura)',
          poppins:'var(--font-poppins)',
          kamerik:'var(--font-kamerik)',
      },
      borderRadius:{
        bvrounded:"8px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundColor:{
        "bvprimary":"black",
        "gradient-premium": "var(--gradient-premium)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-subtle": "var(--gradient-subtle)",
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
      boxShadow: {
        premium: "var(--shadow-premium)",
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
      },
      keyframes: {
        "flip": {
          '0%, 40%': { transform: 'rotateY(0deg)' },       // hold front ~40%
          '50%': { transform: 'rotateY(180deg)' },         // flip to back
          '50%, 90%': { transform: 'rotateY(180deg)' },    // hold back ~40%
          '100%': { transform: 'rotateY(360deg)' },   
        },
        "cardloading":{
          "100%":{
            "background-position":"-100%"
          }
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "floatingGlow": {
          '0%, 100%': {
            transform: 'translateY(0)',
            boxShadow: '0 6px 30px rgba(0,0,0,0.6), 0 0 12px rgba(255,211,105,0.08)',
          },
          '50%': {
            transform: 'translateY(-6px)',
            boxShadow: '0 12px 36px rgba(0,0,0,0.7), 0 0 20px rgba(255,211,105,0.18)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "card-loading":"cardloading 1s linear infinite",
        "flip": 'flip 10s infinite ease-in-out',
        "floatingGlow": 'floatingGlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
