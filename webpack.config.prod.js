/* eslint-env node */
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.ts'),
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '_site'),
    publicPath: '/_site/',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.prod.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
