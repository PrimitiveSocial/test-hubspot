/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // increment by 100
        },
      },
      spacing: {
        "mobile": '92.5%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    function({ addUtilities }) {
      const newUtilities = {
        ".transition-fast": {
          transition: "all .2s ease-out",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

