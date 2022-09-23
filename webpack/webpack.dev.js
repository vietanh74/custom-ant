const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: './src/test/main',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'app.html'),
    }),
  ],
  devServer: {
    static: './dist',
    port: 8080,
    static: {
      directory: path.join(process.cwd(), 'public'),
    },
  },
});
