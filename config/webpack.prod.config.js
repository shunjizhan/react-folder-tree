const path = require('path');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/components/FolderTree/FolderTree.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'react-folder-tree.bundle.js',
    library: 'FolderTree',    // to be available in global scope
    libraryTarget: 'umd',
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
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // creates style nodes from JS strings
          'css-loader',     // translates CSS into CommonJS
          'sass-loader',    // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  plugins: [
    // clear terminal in each build
    new CleanTerminalPlugin(),
  ],
  externals: {
    react: 'umd react',   // this is needed for react to resolve to a single react
  },
};
