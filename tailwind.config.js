/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "15px",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      roboto: "var(--font-roboto)",
      playfair: "var(--font-playfair)",
    },
    backgroundImage: {
      hero: "url(/assets/hero/bg3.jpg)",
      grid: "url(/assets/grid/grid.png)"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222831",
          hover: "#E6E6E6",
        },
        secondary: "#20262E",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#686D76",
          hover: "#b88c5d",
        }
      },
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
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
