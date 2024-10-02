import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#a882dd",
        background: "#f8f8f8",
        brandlight: "#cfbbe8",
        "gray-light": "#e4e0e0",
        "gray-default": "#87484",
        "gray-dark": "#484848",
      },
      fontFamily: {
        brand: ["Playfair Display", "serif"],
        main: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
