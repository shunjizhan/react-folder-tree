const path = require('path');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// TODO: code split the react icons library

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/components/FolderTree/FolderTree.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'react-folder-tree.bundle.js',
    library: 'FolderTree',    // to be available in global scope
    libraryTarget: 'umd',
  },
  resolve: {
    // our code can resolve 'xxx' instead of writing 'xxx.jsx'
    extensions: ['*', '.js', '.jsx', '.mjs'],
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
    // new BundleAnalyzerPlugin(),
  ],
  externals: {
    // this is needed for react to resolve to a single react
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
};
