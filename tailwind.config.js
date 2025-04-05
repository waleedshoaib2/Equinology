/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        // 10s = faster scroll. Adjust as needed.
        marquee: "marquee 10s linear infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
      },

      colors: {
        // For example:
        primary: "#38bdf8", // or any hex code
        background: "#1c1c1c",
        foreground: "#f5f5f5",
        border: "#3f3f46",
        card: "#27272a",
        muted: "#9ca3af",
        // etc.
      },
    },
  },
  plugins: [],
};
