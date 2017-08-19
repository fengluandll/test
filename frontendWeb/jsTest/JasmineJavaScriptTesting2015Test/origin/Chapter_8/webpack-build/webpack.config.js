var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: {
    index: './src/index.js'
  },

  output: {
    path: 'dist',
    filename: '[name]-[hash].js'
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
