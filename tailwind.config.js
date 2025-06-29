// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust these globs to match where your source files live:
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#060816",    // deep purple (was bg-primary)
        secondary: "#c4b6f5",  // light lavender (text-secondary)
        accent: "#915EFF",     // your existing violet
      },
    },
  },
  plugins: [],
}
