const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: ['babel-polyfill', __dirname + '/src/index.js'],
  output: {
    path: process.cwd() + "/",
    filename: 'index.js',
    library: 'redux-loading',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    }]
  },
  plugins: [],
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  }
}
