const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg|jpg|png|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8888,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
};