const path = require('path');

module.exports = {
  entry: './src/index.js',
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};