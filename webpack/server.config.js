const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '../dist/server');
const plugins = [];

if (process.env.WK_DEV_MODE) {
  plugins.push(
    new WebpackShellPlugin({
      onBuildEnd: [ `nodemon --watch ${buildDirectory} ${buildDirectory}/index.js` ]
    })
  );
}

module.exports = {
  entry: './src/server/index.js',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [ nodeExternals() ],
  output: {
    path: buildDirectory,
    filename: 'index.js'
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
  plugins: plugins
};
