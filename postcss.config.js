module.exports = {
  // input: 'src/assets/styles/main.css',
  // output: 'src/assets/styles/compiled.css',
  // verbose: true,
  plugins: [
    require('postcss-import')()
  ]
}