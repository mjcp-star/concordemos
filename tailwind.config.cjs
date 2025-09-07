module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#eef5f5",
        hero: "#a5bfbf",
        surface: "#ffffff",
        surfaceMuted: "#f4f7f8",
        primary: "#2f53ff",
        secondary: "#0099cc",
        accent: "#ffcc66",
        title: "#0e1b2a",
        text: "#223344",
        muted: "#5f7287",
        border: "#d4e1e4"
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,.06)" }
    }
  },
  plugins: []
};
