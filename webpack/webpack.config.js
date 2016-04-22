var webpack = require("webpack"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    PROD = (process && process.env && process.env.NODE_ENV === 'production') || false;

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: "./"
    },
    watch: !PROD,
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ] : [],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.png$/,
                loader:"url?limit=30000&name=[name].[ext]"
            }
        ]
    }
};