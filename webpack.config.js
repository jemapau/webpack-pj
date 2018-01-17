const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

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
        { test: /\.js?$/, loader:'babel-loader', exclude: /node_modules/,
            options: { plugins: ['transform-runtime'], presets: ['es2015']}
        },
        {
          test: /\.html$/,
          loader: "raw-loader"
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: [
              { loader: "css-loader" },
              'postcss-loader',
              { loader: "sass-loader" }
            ]
          })
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Intro to Webpack',
        template: 'src/index.html',
      }),
      new ExtractTextPlugin('main.css'),
      new CommonsChunkPlugin({
          name: "vendor",
          filename: "vendor.bundle.js"
      })
    ]
};
