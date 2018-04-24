const webpack = require('webpack');
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};


const config = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: [path.resolve(__dirname, 'src/index')]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
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

    new UglifyJsPlugin({
      test: /\.(js|jsx)($|\?)/i,
      cache: true,
      sourceMap: true,
      uglifyOptions:{
        ecma: 8,
        warnings: false,
        ie8: true,
        safari10: true
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
};

module.exports = config;