const path = require('path')
const webpack = require('webpack')


module.exports = {
  mode: 'development',
  performance: {
    hints: 'warning'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true
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
    publicPath: '/',
    path: path.resolve(__dirname, '/build'), // Note: Physical files are only output by the production build task `npm run build`.
    filename: '[name].js'
  },
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader?importLoaders=1&modules',
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
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.(png|jpg|ico|svg|gif)$/,
        loader: 'url-loader?limit=1000000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  }
}
