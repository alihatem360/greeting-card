/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-135": "linear-gradient(135deg, #ffd1cd 0%, #d5fffa 100%)",
        "gradient-225": "linear-gradient(135deg, #f1c974 0%,#a54db6 100%)",
        "gradient-315": "linear-gradient(135deg, #ebeee0 0%,#edadbf 100%)",
        "gradient-45": "linear-gradient(135deg, #86c5fc 0%,#e8c3fd 100%)",
      },

      colors: {
        primary: "#5c6ac4",
        secondary: "#3C486B",
      },
    },
  },
  plugins: [],
};
