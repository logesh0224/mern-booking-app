/** @type {import('tailwindcss').Config} */
//import { defineConfig } from 'tailwindcss';

export default{

    content: ["./index.html","./src/*/**{js,ts,jsx,tsx}"],
    optimization: {
      // Disable tree shaking for CSS files
      usedExports: true},
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};
