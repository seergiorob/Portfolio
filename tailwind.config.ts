import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Monolith palette
        background: "#0b1326",
        foreground: "#dae2fd",
        primary: "#4cd7f6",
        "primary-container": "#06b6d4",
        "on-primary": "#003640",
        "on-primary-container": "#00424f",
        surface: "#0b1326",
        "surface-container": "#171f33",
        "surface-container-low": "#131b2e",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "surface-container-lowest": "#060e20",
        "surface-bright": "#31394d",
        "surface-dim": "#0b1326",
        "surface-variant": "#2d3449",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#bcc9cd",
        "outline": "#869397",
        "outline-variant": "#3d494c",
        secondary: "#c1c7cf",
        "secondary-container": "#41474e",
        "on-secondary": "#2b3137",
        tertiary: "#2fd9f4",
        "tertiary-container": "#00b7cf",
        "on-tertiary": "#00363e",
        // Keep shadcn compat tokens
        border: "#3d494c",
        input: "#2d3449",
        ring: "#4cd7f6",
        muted: {
          DEFAULT: "#171f33",
          foreground: "#bcc9cd",
        },
        accent: {
          DEFAULT: "#171f33",
          foreground: "#dae2fd",
        },
        destructive: {
          DEFAULT: "#ffb4ab",
          foreground: "#690005",
        },
        card: {
          DEFAULT: "#171f33",
          foreground: "#dae2fd",
        },
        popover: {
          DEFAULT: "#171f33",
          foreground: "#dae2fd",
        },
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
