
const path = require('path')

const webpack = require('webpack')
const dotenv = require('dotenv')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  const env = dotenv.config().parsed

  const envKeys = Object.keys(env).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      chunkFilename: '[id].js',
      publicPath: ''
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                },
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({})
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'url-loader?limit=10000&name=img/[name].[ext]'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html'),
        filename: 'index.html',
        inject: 'body'
      })
    ]
  }
}
