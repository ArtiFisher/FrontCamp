var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.join(path.resolve(__dirname), '/build');
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: {
    bundle: APP_DIR + '/src/app.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        // include: APP_DIR + '/src',
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};

process.env.NODE_ENV && process.env.NODE_ENV.indexOf('test') > -1 && (config.entry.mock = APP_DIR + '/src/mock.js');

module.exports = config;
