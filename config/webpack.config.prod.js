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
        // test: /\.s?[ca]ss$/,
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      },

      // {
      //   test: /\.(woff|svg|eot|ttf|woff2)$/,
      //   loader: 'file-loader',
      //   // loader: 'file?name=public/fonts/[name].[ext]',
      //   query: {
      //     name: '[sha512:hash:base64:7].[ext]',
      //   },
      // },

      // { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      // { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
      // { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
      // { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
      // { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },

      // { 
      //   test: /\.(woff|svg|eot|ttf|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      //   loader: "file-loader" 
      // },

      { test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=100000' }, 

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

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