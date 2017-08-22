const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    modules: ['node_modules', 'assets']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader", // translates CSS into CommonJS,
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }], 
        exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]', exclude: /node_modules/ },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=[name]-[hash].[ext]' }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}