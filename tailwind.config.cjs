/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
      },

      screens: {
        sss: "380px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
