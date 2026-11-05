/** @type {import('tailwindcss').Config} */
module.exports = {
  // किन-किन फाइलों में Tailwind की क्लासेस स्कैन करनी हैं
  content: [
    "./index.html",
    "./*.{js,ts}",
    "./src/**/*.{html,js,ts}"
  ],

  // डार्क मोड टॉगल करने के लिए क्लास-बेस्ड स्ट्रेटेजी
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          900: "#064e3b",
        },
        surface: {
          dark: "#0f172a",
          card: "#1e293b",
          border: "#334155"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"]
      }
    },
  },

  plugins: [],
};
