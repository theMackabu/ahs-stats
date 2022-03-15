module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        navbar: "50vh",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
