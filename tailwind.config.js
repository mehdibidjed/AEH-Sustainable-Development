/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Popine: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        instrumentSerif: ["Instrument Serif", "Serif"],
        helvetica: ["Helvetica Now Display"],
        family: ["font family"],
      },
      colors: {
        PrimaryBlue: "#053968",
        YellowGreen: "#D8FF85",
        PrimaryGreen: "#0A211F",
        BgGreen: "#05130E",
        WhiteBg: "#F7F9F2",
        PrimaryFooterBg: "#171717",
        SecondaryFooterBg: "#1D1D1D",
        YellowBg: "#E6ECD6",
        SecondaryBlue: "#0A1421",
        DarkGreen: "#013934",
        ServiceCardColor: "#EDECE8",
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  plugins: [],
};
