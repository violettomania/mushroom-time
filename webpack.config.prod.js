import { join } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const entry = join(__dirname, '/src/index.ts');
export const output = {
    filename: 'app.bundle.js',
    path: join(__dirname, 'dist'),
    publicPath: '/dist/'
};
export const mode = 'production';
export const module = {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        },
    ],
};
export const plugins = [
    new CopyWebpackPlugin({
        patterns: [
            {
                from: 'src/assets',
                to: 'assets',
            },
        ],
    }),
];
export const resolve = {
    extensions: ['.ts', '.tsx', '.js'],
};
