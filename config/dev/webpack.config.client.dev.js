const path = require("path");
const webpack = require("webpack");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const baseConfig = require('../mixins/webpack.client.mixin');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    path.join(__dirname, '..', 'src', 'client/index.tsx')
  ],
  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
};
