const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const devOptions = {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 0,
    ignored: ['node_modules/**'],
  },
};

const prodOptions = {
  mode: 'production',
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-folder-tree.bundle.js'
  },
  resolve: {
    // our code can resolve 'xxx' instead of writing 'xxx.jsx'
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    // For every file that match regex in 'test', webpack pipes the code through to loaders
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // generates an HTML file by injecting automatically all our generated bundles.
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  ...devOptions,
};