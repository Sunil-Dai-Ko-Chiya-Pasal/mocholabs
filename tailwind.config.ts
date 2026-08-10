import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary — the terracotta/rust accent used for CTAs & highlights
        primary: {
          50: "#FCEEEA",
          100: "#F8DAD2",
          200: "#F0B4A5",
          300: "#E68D78",
          400: "#DB6A4E",
          500: "#C1503A", // base
          600: "#A6402D",
          700: "#853323",
          800: "#63251A",
          900: "#421810",
        },
        // Near-black ink used for text & dark surfaces
        ink: {
          50: "#F4F3F2",
          100: "#E3E1DE",
          400: "#4A4643",
          500: "#2B2724",
          600: "#1D1A17",
          700: "#151311",
          900: "#0E0C0B",
        },
        // Warm off-white page background
        cream: "#F7F3EE",
        // Soft blush used as a decorative accent
        blush: "#F7D9D3",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        hard: "4px 4px 0px 0px rgba(14,12,11,1)",
        "hard-sm": "3px 3px 0px 0px rgba(14,12,11,1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
