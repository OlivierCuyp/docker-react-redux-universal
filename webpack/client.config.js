const path = require('path');
const webpack = require('webpack');

const buildDirectory = path.resolve(__dirname, '../dist/assets/js');

let devtool = '';
const plugins = [];

if (process.env.WK_DEV_MODE) {
  devtool = 'cheap-module-eval-source-map';
} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: './src/client/index.js',
  target: 'web',
  output: {
    path: buildDirectory,
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux'
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
  plugins: plugins,
  devtool: devtool
};
