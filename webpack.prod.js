const webpack = require('webpack');
const path = require('path');


const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

const config = {
  devtool: 'source-map',
  entry: {
    index: [path.resolve(__dirname, 'src/index')]
  },
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'env'],
            plugins: ['transform-class-properties', 'transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        exclude: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'fonts')
        ],
        include: path.resolve(__dirname, 'src/styles'),
        use: [
          {
            loader: 'style-loader',
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
          path.resolve(__dirname, 'src/styles'),
          path.resolve(__dirname, 'node_modules'),
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
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000000'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: path.resolve(__dirname, 'src/assets/images/features'),
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]

  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  }
};

module.exports = config;