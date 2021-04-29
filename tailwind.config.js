module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.tsx",
    "./src/components/**/*.js",
    "./src/pages/**/*.tsx",
    "./src/pages/**/*.js",
    "./public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar-hide")],
};
