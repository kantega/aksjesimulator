var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: {
        'app': './src/app/app.jsx'
    },

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g|gif)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.scss$/,
            loader: "style!css!sass"
        }, {
            test: /bootstrap\/js\//,
            loader: 'imports?jQuery=jquery'
        }]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/index.html'
            }
        ])
    ]



};
