/** @type {import('tailwindcss').Config} */
//import { defineConfig } from 'tailwindcss';

export default{

    content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  
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
