const path = require('path');
const webpack = require('webpack');

module.exports = ({ port }) => ({
    devtool: 'cheap-module-source-map',
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false
            },
            sourceMap: false,
        }),
        new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production'),
              'PORT': JSON.stringify(port)
          }
        }),
    ],
});
