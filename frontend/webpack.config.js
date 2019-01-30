const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),

    entry: './index.jsx',

    output: {
        filename: '[name]-[hash].js',
        path: path.resolve('../backend/apl/static/apl/bundles/local'),
    },
    devtool: 'source-map',

    watch: true,

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2'],
            },
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader",
            }),
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['../backend/apl/static/apl/bundles/local'], { watch: true, allowExternal: true }),
        new ExtractTextPlugin('bundle.css'),
        new BundleTracker({ filename: '../backend/webpack-stats.json' }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
