const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
const path = require('path');

module.exports = {
  entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
          { test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader")
          }
      ]
     },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    mode: 'production'
}
    