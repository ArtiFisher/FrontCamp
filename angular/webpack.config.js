var path = require('path');

var BUILD_DIR = path.join(path.resolve(__dirname), '/build');
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: {
    bundle: APP_DIR + '/src/app.js',
    mock: APP_DIR + '/src/mock.js'
  },
  // entry: [
  //   'webpack-dev-server/client?http://localhost:3000',
  //   'webpack/hot/only-dev-server',
  //
  // ],
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
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};

module.exports = config;
