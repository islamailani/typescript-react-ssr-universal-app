const path = require("path");
const webpack = require("webpack");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const baseConfig = require('../mixins/webpack.client.mixin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractPlugin = new ExtractTextPlugin({
  filename: 'css/app.css',
});

module.exports = {
  ...baseConfig,
  devtool: 'source-map',
  mode: "production",
  entry: {
    main: [
      "babel-polyfill",
      path.join(__dirname, "..", "src", "client/index.tsx")
    ],
    app: path.join(__dirname, "..", "src", "styles/app.scss"),
  },
  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.sa|css$/,
        loader: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 'sass-loader'
          ]
        }),
      },
    ]
  },
  plugins: [
    ...baseConfig.plugins,
    ExtractPlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
};
