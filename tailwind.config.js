/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
      },
      keyframes: {
        slide_down: {
          "0%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        slide_down: "slide_down 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
