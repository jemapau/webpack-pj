const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
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
          { test: /\.jsx?$/, loader:'babel-loader', exclude: /node_modules/,
            options: { plugins: ['transform-runtime'], presets: ['es2015']}
          },
          {test: /\.hbs$/, loader: 'handlebars-loader'},
          { test:/\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
      ]
    },
    plugins: [
      new HtmlwebpackPlugin({
        title: 'Intro to Webpack',
        template: 'src/index.html'
      }),
    ]
};
