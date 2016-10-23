const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: [path.join(__dirname, '/dev/js/app.js')],
    devtool: 'source-map',
    output: {
      path: buildPath,
      filename: 'app.js',
    },
    plugins: [
      // Define production build to allow React to strip out unnecessary checks
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      // Minify the bundle
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // suppresses warnings, usually from module minification
          warnings: false,
        },
      }),
      // Allows error warnings but does not stop compiling.
      new webpack.NoErrorsPlugin(),
      // Transfer Files
      new TransferWebpackPlugin([
        {from: 'src'},
      ], path.resolve(__dirname, '.')),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
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
    }
};
