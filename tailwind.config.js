/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#A53860",
          secondary: "#450920",
          accent: "#DA627D",
          neutral: "#F5C99D",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
