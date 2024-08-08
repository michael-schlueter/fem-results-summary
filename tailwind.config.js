/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "organgey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        "hanken-grotesk": ['"Hanken Grotesk"', "sans-serif"],
      },
      fontSize: {
        "3.5xl": ["32px", "auto"],
        "5.5xl": ["56px", "72px"],
      },
      boxShadow: {
        custom: "0 30px 60px rgba(61, 108, 236, 0.15)",
      },
    },
  },
  plugins: [],
};
