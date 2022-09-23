const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv').config({ path: process.cwd() + '/.env' });
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'swc-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
    moduleIds: 'deterministic',
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['*', '.tsx', '.ts', '.js', '.vue'],
    alias: {
      '@': path.join(process.cwd(), 'src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "package.json",
          to: "",
        },
        {
          from: "README.md",
          to: "",
        },
      ],
    }),

    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed) || {},
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};
