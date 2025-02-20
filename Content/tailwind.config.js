/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Figtree : ["Figtree" , "sans-serif"]
      },
      
      colors: {
        primary: "#fff",
        secondary: "#213170",
        trinary: "#C5E5FF",
        text: "#171717"
      },

      borderRadius: {
        xxl: "40px"
      }
    },
  },
  plugins: [],
};
