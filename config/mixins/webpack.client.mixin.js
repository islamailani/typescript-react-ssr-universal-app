module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json', '*']
  },
  output: {
    path: path.join(__dirname, '..', '..', 'client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/static/js/'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          // 2. babel-preset-react transform React jsx and babel-preset-env es2015 syntax into code understandable by the browser
          //    syntax-dynamic-import allow babel to parse dynamic import syntax but not transform it
          //    react-loadable/babel declare which modules are being loaded
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
              plugins: ['syntax-dynamic-import', 'react-loadable/babel']
            }
          },
          // 1. TypeScript type check and emit JavaScript es2015 (TypeScript without types) consumable by Babel
          {
            loader: 'ts-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: path.join(__dirname, '..', '..', 'src', 'server', 'stats', 'reactLoadable.json')
    }),
  ]
}