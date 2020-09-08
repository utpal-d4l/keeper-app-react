
const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const envKeys = require('./config')

module.exports = (_env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: './src/index.js',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js'
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
          use: isProduction ? [MiniCssExtractPlugin.loader, 'css-loader'] : ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'url-loader?limit=10000&name=img/[name].[ext]'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        filename: 'index.html',
        inject: true
      }),
      isProduction
      && new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ].filter(Boolean)
  }
}
