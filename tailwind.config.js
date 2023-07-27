/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0D6EFF",
        primaryFade: "#EDF4FF",
        graybg: "#F5F5F5",
        grayLight: "#EBEBEB",
        lightBeerus: "#F2F2F2",
        darkTrunks: "#999CA0",
        purpleLight: "#E7E9FE",
        blueLight: "#D2E3FF",
        blueLink: "#0E6FFF",
        blueBgLight: "#EEF4FF",
        red: "#D33030",
        divider: "#D8D8D8",
      },
    },
  },
  plugins: [],
};
