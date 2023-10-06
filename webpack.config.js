const path = require('path');

module.exports = {
  entry: __dirname + '/app/app.ts',
  output: {
    filename: 'app.bundle.js',
    path: __dirname + '/app',
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: __dirname + '/app',
    publicPath: '/app/',
    port: 8080,
    host: 'localhost',
  },
};

