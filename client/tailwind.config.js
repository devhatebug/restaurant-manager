/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%' : {transform: 'translateX(50%)', opacity: '0.5'},
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        openingPopup: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '0.5', transform: 'scale(0.75)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.5s linear',
        openingPopup: 'openingPopup 0.2s linear forwards',
      },
    },
  },
  plugins: [],
};
