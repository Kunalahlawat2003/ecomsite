/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      transitionProperty: {
      'transform': 'transform', // Ensure 'transform' transition is enabled
    },keyframes: {
      zoomOut: {
        '0%': { transform: 'scale(1.5)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
    },
    animation: {
      zoomOut: 'zoomOut 1s ease-in-out',
    },
  },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

