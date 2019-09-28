

module.exports = {
  'entry': 'src/client/vue/index.js',
  'output': {
    'path': __dirname+'/dist',
    'filename': '[name].[chunkhash:8].js',
  },
  'dev-tools': 'source-map',
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
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
