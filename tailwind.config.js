/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "apple-green": "#009900",
      },
    },
  },
  plugins: [require("daisyui")],
};

