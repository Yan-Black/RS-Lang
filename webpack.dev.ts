/* eslint-disable import/no-extraneous-dependencies */
import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
<<<<<<< HEAD
        test: /\.(png|jpe?g|gif|svg|ogg|mp3|wav|mpe?g)$/i,
=======
        test: /\.(svg|mp3|png|jpe?g|gif)$/i,
>>>>>>> feat: implement input field behavior according to task, implement input word checking, create reducer and actions for training card
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
