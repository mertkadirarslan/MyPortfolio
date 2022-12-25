module.exports = {
  content: [
    "./data/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        online: '#3ba55d',
        idle: '#faa81a',
        dnd: '#ed4245',
        offline: '#747f8d'
      }
    },
  },

  plugins: [],
}