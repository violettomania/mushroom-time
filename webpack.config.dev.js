/* eslint-env node */
import { join } from 'path';

export const entry = join(__dirname, '/src/index.ts');
export const output = {
  filename: 'app.bundle.js',
  path: join(__dirname, 'dist'),
  publicPath: '/dist/'
};
export const mode = 'development';
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
  ],
};
export const resolve = {
  extensions: ['.ts', '.tsx', '.js'],
};
export const devServer = {
  static: {
    directory: join(__dirname, '/'),
  },
  port: 8080,
  host: 'localhost',
  open: true,
  historyApiFallback: true, // Allows for using client-side routing
};
