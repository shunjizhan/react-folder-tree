const path = require('path');

module.exports = {
  entry: './src/Components/FolderTree',

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
        // test: /\.s?[ca]ss$/,
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      },

      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },

      // { 
      //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      //   loader: "file-loader" 
      // },

      // {
      //   loader: 'autoprefixer-loader',
      //   options: {
      //     browsers: 'last 2 versions',
      //   },
      // },

      // {
      //   loader: 'sass-loader',
      // }

    ],
  },

  output: {
    path: './build',
    filename: 'index.js',
    libraryTarget: 'umd',
  },

  // resolve: {
  //   // extensions: ['.js', '.jsx', '.css'],
  //   extensions: ['.js', '.jsx', '.css'],
  //   alias: {
  //     'react': path.resolve('./node_modules/react'),
  //     'react-dom': path.resolve('./node_modules/react-dom'),
  //     'react-fontawesome': path.resolve('./node_modules/react-fontawesome/lib/index'),
  //   },
  // },

  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
};