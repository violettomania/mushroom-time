const path = require('path');

module.exports = {
  entry: __dirname + '/app/app.ts',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, '/'),
    publicPath: '/app/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/, // Match .ts and .tsx files
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 8080,
    host: 'localhost',
    open: true, // Automatically open in the browser
    historyApiFallback: true, // Allows for using client-side routing
  },
};
