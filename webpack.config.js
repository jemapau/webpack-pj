const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
});

module.exports = {
    entry: [
      'babel-polyfill',
      './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.jsx?$/, loader:'babel-loader', exclude: /node_modules/,
            options: { plugins: ['transform-runtime'], presets: ['es2015']}
        },
        {test: /\.hbs$/, loader: 'handlebars-loader'},
        {
          test: /\.html$/,
          loader: "raw-loader"
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
      ],
    },
    plugins: [
      new HtmlwebpackPlugin({
        title: 'Intro to Webpack',
        template: './src/index.html'
      }),
      extractSass
    ]
};
