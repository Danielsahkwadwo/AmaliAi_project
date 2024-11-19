/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinDot: {
          "0%": { transform: "translateX(-50%) rotate(0deg) translateY(-20px)" },
          "50%": { transform: "translateX(-50%) rotate(180deg) translateY(20px)" },
          "100%": { transform: "translateX(-50%) rotate(360deg) translateY(-20px)" },
        },
      },
      animation: {
        "spin-dot": "spinDot 1.5s linear infinite",
      },
    },
  },
  plugins: [],
}

