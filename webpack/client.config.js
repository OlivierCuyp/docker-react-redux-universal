const path = require('path');
const webpack = require('webpack');

const buildDirectory = path.resolve(__dirname, '../dist/assets/js');

module.exports = {
  entry: './src/client/index.js',
  target: 'web',
  output: {
    path: buildDirectory,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
