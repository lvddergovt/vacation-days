module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors: {
        "at-light-green": "#44ba9f",
        "at-green": "#286d5d",
        "light-grey": "#f1f1f1",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1440px",
        "2xl": "1440px",
      }
    },
  },
  plugins: [require("daisyui")],
};
