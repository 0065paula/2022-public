module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        500: "#009DFF",
        600: "#0080FF",
      },
      black: {
        DEFAULT: "#00122E",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      gray: {
        900: "#00122E",
        700: "#2C3852",
        500: "#798294",
        400: "#A3B4CC",
        300: "#E4E9F2",
        200: "#EDF0F7",
        100: "#F2F5FA",
        50: "#F3F4F7",
      },
      purple: {
        600: "#7E41FF",
      },
      green: {
        600: "#00BA5D",
      },
      red: {
        600: "#F0483E",
      },
      yellow: {
        600: "#FEA008",
      },
      indigo: {
        900: "#1D326C",
      },
    }
  },
  variants: {
    extend: {
      maxHeight: ['active'],
    },
  },
  plugins: [],
}
