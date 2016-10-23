const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/dev/js/app.js'),
    ],
    devServer: {
        contentBase: 'src',
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 8080,
        host: '0.0.0.0'
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        filename: 'app.js'
    },
    plugins: [
      // Enables Hot Modules Replacement
      new webpack.HotModuleReplacementPlugin(),
      // Allows error warnings but does not stop compiling.
      new webpack.NoErrorsPlugin(),
      // Moves files
      new TransferWebpackPlugin([
        {from: 'src'},
      ], path.resolve(__dirname, '.')),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: [nodeModulesPath],
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader: "file-loader?name=[name].[ext]"
            }
        ]
    },

};
