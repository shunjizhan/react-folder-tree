const path = require('path');
module.exports = {
  entry: './src/App',

  module: {
    loaders: [
      {
        loader: 'babel',
        test: [/\.js$/, /\.jsx$/],
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
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[path][name]__[hash:base64:5]',
            },
          },
          {
            loader: 'autoprefixer-loader',
            options: {
              browsers: 'last 2 versions',
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
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