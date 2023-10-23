/* eslint-env node */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.ts'),
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '_site'),
    publicPath: '/_site/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 8080,
    host: 'localhost',
    open: true, // Automatically open in the browser
    historyApiFallback: true, // Allows for using client-side routing
    liveReload: true,
  },
};
