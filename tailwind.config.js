module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    container: {
      center: true,
      background: "blue",
      padding: "2rem",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
