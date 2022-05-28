
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const workboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const pkg = require('./package.json');
const { isProd, envs, env } = require('./scripts/envs.js');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  mode: isProd() ? envs.production : envs.development ,
  devtool: 'source-map',

  plugins: [

    new HtmlWebpackPlugin({
      title: pkg.name,
      description: pkg.description,
      color: pkg.themeColor,
      name: pkg.displayName,
      template: './src/assets/index.html'
    }),

    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    })
  ],

  resolve: {
    extensions: ['.mjs', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
}