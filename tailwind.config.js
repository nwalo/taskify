/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        all: "0 0 5px black",
      },
    },
  },
  plugins: ["tailwindcss", "autoprefixer"],
};
