const path = require('path')

module.exports = {
  entry: 'src/main.js',
  output: {
    filename: 'public/bundle.js',
    path: path.resolve(__dirname, './')
  }
}
