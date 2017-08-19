module.exports = {
  context: __dirname,
  entry: {
  },

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
