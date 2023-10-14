/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "VT323": ['VT323', 'monospace'],
        "PermanentMarker": ['Permanent Marker', 'cursive'],
        "Orbitron": ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}