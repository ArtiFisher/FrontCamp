var webpack = require("webpack");
var path = require('path');

var BUILD_DIR = path.join(path.resolve(__dirname), '/build');
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: APP_DIR + '/src/index.js',
  // entry: [
  //   'webpack-dev-server/client?http://localhost:3000',
  //   'webpack/hot/only-dev-server',
  //
  // ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
    //publicPath: './src/index'
  },
  resolve: {
    extensions: [ '', '.js', '.json', '.jsx', '.es6', '.babel', '.node'],
    modulesDirectories: [ 'node_modules' ]
  },
  // loaders: ['react-hot'],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};

module.exports = config;
