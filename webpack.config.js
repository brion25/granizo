const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const info = require('./package.json')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: info.name + '.' + info.version + '.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
        exclude: ['node_modules']
      }
    ]
  }
}
