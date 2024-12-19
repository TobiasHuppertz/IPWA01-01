/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceSans: ['SourceSans', 'sans-serif'],
        Merriweather: ['Merriweather', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
