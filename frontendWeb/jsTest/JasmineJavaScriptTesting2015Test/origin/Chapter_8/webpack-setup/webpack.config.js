module.exports = {
  context: __dirname,
  entry: {
    spec: [
      './spec/StockSpec.js',
      './spec/InvestmentSpec.js',
      './spec/components/NewInvestmentSpec.jsx',
      './spec/components/InvestmentListItemSpec.jsx',
      './spec/components/InvestmentListSpec.jsx'
    ]
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
