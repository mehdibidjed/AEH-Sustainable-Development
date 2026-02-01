/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Popine: ["Poppins"],
        Inter: ["Inter"],
        Instrument_Serif: ["Instrument Serif"],
      },
      colors: {
        PrimaryBlue: "#053968",
        YellowGreen: "#D8FF85",
        PrimaryGreen: "#0A211F",
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  plugins: [],
};
