/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      //  add open sans as default font
      sans: ["Open-Sans", "Open Sans"],
    },
    colors: {
      darkest: "#78350F",
      dark: "#F7A72C",
      normal: "#fed7aa",
      darklight: "#BAE6FD",
      light: "#EFF6FF",
      light2: "#F5F5F4",
      black: "#000000",
      white: "#FFFFFF",
    },
    // extend: {
    //   fontFamily: {
    //     sans: ["Inter", "sans-serif"],
    //   },
    // },
  },
  plugins: [],
});
