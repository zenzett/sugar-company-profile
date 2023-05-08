/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple01: "#3D46A2",
        blue01: "#029FE4",
        blue02: "#509FDD",
        blue03: "#25A0D8",
        blue04: "#00537C",
      },
      backgroundImage: {
        "foot-pattern": "url('/bgfoot.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
