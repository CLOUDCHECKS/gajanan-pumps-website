import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1612px",
      },
    },
    extend: {
      colors: {
        navy: {
          50: "#EEF4FB",
          100: "#D8E6F4",
          200: "#B3CCE6",
          300: "#7FA8D0",
          400: "#4C7FB2",
          500: "#2A5C8F",
          600: "#123F72",
          700: "#082B55",
          800: "#021B3D",
          900: "#001736",
          950: "#000F27",
        },
        brand: {
          yellow: "#FFC907",
          "yellow-soft": "#FFD84D",
          "yellow-deep": "#E9B400",
          blue: "#0B5CF6",
          ink: "#0B1B33",
          mist: "#E9F1F9",
          panel: "#EFF5FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(3, 22, 48, 0.45)",
        "card-hover": "0 26px 55px -26px rgba(3, 22, 48, 0.55)",
        modal: "0 40px 90px -30px rgba(0, 15, 39, 0.65)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 201, 7, 0.45)" },
          "100%": { boxShadow: "0 0 0 16px rgba(255, 201, 7, 0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.9s ease both",
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        marquee: "marquee 38s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
