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
      hero: "url(/assets/hero/bg.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ECB176",
          hover: "#F8C794",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#F4Dec",
          hover: "#b88c5d",
        }
      },
    },
  },
  plugins: [],
};
