const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  'mode': 'development',
  'entry': './src/client/vue/index.js',
  'output': {
    'path': __dirname+'/dist',
    'filename': '[name].[chunkhash:8].js',
  },
  'devtool': 'source-map',
  'module': {
    'rules': [
      {
        'enforce': 'pre',
        'test': /\.(js|jsx)$/,
        'exclude': /node_modules/,
        'use': 'eslint-loader',
      },
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'babel-loader',
          'options': {
            'presets': [
              'env',
            ],
          },
        },
      },
      {
        'test': /\.vue$/,
        'exclude': /node_modules/,
        'use': 'vue-loader',
      },
      {
        'test': /\.scss$/,
        'use': [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  'plugins': [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/client/html/index.html',
    }),
  ],
};
