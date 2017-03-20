const path = require('path');

module.exports = {
  entry: './src/Components/FolderTree',

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy', 'transform-runtime'],
          presets: ['latest', 'react', 'stage-0'],
        },
      },
      {
        test: /\.s?[ca]ss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]__[path][name]__[hash:base64:5]'
          }
        }, {
          loader: 'autoprefixer-loader',
          options: {
            browsers: 'last 2 versions'
          }
        }, {
          loader: 'sass-loader'
        }]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=100000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

    ],
  },

  output: {
    path: './build',
    filename: 'index.js',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-fontawesome': path.resolve('./node_modules/react-fontawesome/lib/index'),
    },
  },

  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
};
