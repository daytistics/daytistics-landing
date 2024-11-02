/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.core.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e9f6e",
        secondary: "#057a55",
        accent: "#3f83f8",
        "primary-dark": "#059669",
        "secondary-dark": "#046c4e",
        "accent-dark": "#3f83f8",
      },
      spacing: {
        "75px": "75px",
        "690px": "690px",
        "800px": "800px",
        "8xl": "88rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
