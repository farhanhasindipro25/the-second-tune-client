/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        theSecondTuneTheme: {
          primary: "#11131c", // dark blue
          secondary: "#0f1119", // dark blue
          accent: "#F2F5FF", // white
          error: "#EF3E36", // red
          success: "#00C49A", // green
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
