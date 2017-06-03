module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + './dist',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            plugins: ['transform-runtime'],
            presets: ['es2015']
          }
        }
      ]
    }
};
