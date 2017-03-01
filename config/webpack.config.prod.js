const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

plugins: [
  new ExtractTextPlugin('styles.css')
]

module.exports = {
  entry: './src/App',

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy', 'transform-runtime'],
          presets: ['latest', 'react', 'stage-0'],
        },
      },

      {
        test: /\.(woff|svg|eot|ttf|woff2)$/,
        loader: 'file-loader',
        query: {
          name: '[sha512:hash:base64:7].[ext]',
        },
      },

      {
        test: /\.s?[ca]ss$/,
        exclude: /node_modules/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      }

    ],
  },

  output: {
    path: './build',
    filename: 'index.js',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-fontawesome': path.resolve('./node_modules/react-fontawesome/lib/index'),
    },
  },

  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
};