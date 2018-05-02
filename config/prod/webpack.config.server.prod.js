const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require('webpack');
const baseConfig = require('../mixins/webpack.server.mixin');

module.exports = {
  ...baseConfig,
  devtool: 'sourcemap',
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
};
