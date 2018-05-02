const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],

  // The main entry point src/server/index.tsx
  entry: [
    'babel-polyfill',
    path.join(__dirname, '..', '..', 'src', 'server', 'presenter', 'express')
  ],

  // Generated bundle location
  output: {
    path: path.join(__dirname, '..', '..', 'server'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  // src files take into account
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json']
  },

  // Plugins in charge to transform the src code
  // Rules are applied from right to left (ts-loader then babel-loader)
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: [
          'css-loader/locals?module&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          // 2. babel-preset-react transform React jsx and babel-preset-env es2015 syntax into code understandable by the browser
          //    dynamic-import-node transpile import() to a deferred require() for node
          //    react-loadable/babel declare wich modules are being loaded
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                'react',
                [
                  'env',
                  {
                    modules: false
                  }
                ]
              ],
              plugins: ['dynamic-import-node', 'react-loadable/babel']
            }
          },
          // 1. TypeScript type check and emit JavaScript es2015 (TypeScript without types) consumable by Babel
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
};
