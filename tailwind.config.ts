import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "#8B1E2D",
        gold: "#D4AF37",
        charcoal: "#2B2B2B",
        porcelain: "#F8F6F3",
        ink: "#171717"
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(43, 43, 43, 0.12)",
        gold: "0 18px 45px rgba(212, 175, 55, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        rise: "rise 700ms ease-out both",
        sheen: "sheen 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
