/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image" : "url('/src/media/MicrosoftTeams-image-2.png')",
        "left" : "url('/src/media/MicrosoftTeams-image.png')"

      }
    },
  },
  plugins: [],
}