/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#146356',
          100: '#D0EAF536',
          200: '#FF7F3F',
          300: '#CFEAF5'
        },
        bgcustom: {
          50: '#D0EAF536',
        },
      },
      top: {
        '-270': '-270px',
        '-33': '-33px',
      },
    },
  },
  plugins: [],
}
