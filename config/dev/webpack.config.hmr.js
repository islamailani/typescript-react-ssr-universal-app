const path = require("path");
const webpack = require('webpack');
const baseConfig = require('../mixins/webpack.client.mixin');

module.exports = {
  ...baseConfig,
  mode: 'development',
  entry: [
    "babel-polyfill",
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    path.join(process.cwd(), "src", "client/index.tsx")
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          // 2. babel-preset-react transform React jsx and babel-preset-env es2015 syntax into code understandable by the browser
          //    syntax-dynamic-import allow babel to parse dynamic import syntax but not transform it
          //    react-loadable/babel declare wich modules are being loaded
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                "react",
                [
                  "env",
                  {
                    modules: false
                  }
                ]
              ],
              plugins: ["syntax-dynamic-import", "react-loadable/babel", 'react-hot-loader/babel']
            }
          },
          // 1. TypeScript type check and emit JavaScript es2015 (TypeScript without types) consumable by Babel
          {
            loader: "ts-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
