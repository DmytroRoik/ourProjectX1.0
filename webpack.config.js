const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const combineLoaders = require("webpack-combine-loaders");

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
	entry: APP_DIR + '/index.jsx',
	output: {
    path: BUILD_DIR,
		filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx','.json'] 
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules:true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes')
              ],
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}; 

module.exports = config;
