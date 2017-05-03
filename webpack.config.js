var path = require('path')
var webpack = require('webpack')
var StringReplacePlugin = require("string-replace-webpack-plugin")

module.exports = {
  entry: {
    ClrIconVue: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          path.resolve(__dirname, './src')
        ],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src')
        ]
      },
      {
        test: /\.css$/,
        loader: StringReplacePlugin.replace('style-loader!css-loader', {
          replacements: [
            {
              pattern: /clr-icon/ig,
              replacement: function () {
                return '.clr-icon'
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new StringReplacePlugin()
  ]
}
