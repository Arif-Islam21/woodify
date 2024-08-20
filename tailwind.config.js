/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#795548",
        themeFade: "#79554883",
      },
      fontFamily: {
        rancho: ['"Rancho", cursive'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};

// font-family: ;
