const path = require('path');
const webpack = require('webpack');

module.exports = {
  performance: {
    hints: 'warning'
  },
  entry: {
    index: [
      path.resolve(__dirname, 'src/index'),
      'webpack-hot-middleware/client?reload=true', //  note that it reloads the page if hot module reloading fails.
      'eventsource-polyfill' // necessary for hot reloading with IE
    ]
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '/build'), // Note: Physical files are only output by the production build task `npm run build`.
    filename: '[name].js'
  },
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        exclude: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'node_modules')
        ],
        include: path.resolve(__dirname, 'src/styles'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.scss/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src/styles')
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'env'],
            plugins: ['transform-class-properties', 'transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.(png|jpg|ico)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  }
};
