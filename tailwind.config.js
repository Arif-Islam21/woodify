/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['"Rancho", cursive'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [require("daisyui")],
};

// font-family: ;
