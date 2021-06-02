const path = require('path');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
    alias: {      // to prevent the multiple react problem
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
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
          MiniCssExtractPlugin.loader,  // generate a separate style.css
          'css-loader',                 // translates CSS into CommonJS
          'sass-loader',                // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  plugins: [
    // clear terminal in each build
    new CleanTerminalPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    // new BundleAnalyzerPlugin(),
  ],
  externals: {
    // this is needed for react to resolve to a single react
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
};
