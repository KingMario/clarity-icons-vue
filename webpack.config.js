var path = require('path')
var webpack = require('webpack')
var StringReplacePlugin = require('string-replace-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    ClrIconVue: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
    library: '[name]',
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
    new StringReplacePlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src',
        to: 'src'
      }, {
        from: 'package.json',
        transform (content) {
          let purifiedContent = JSON.parse(content.toString().replace(/dist\//g, ''))

          purifiedContent.peerDependencies = {
            vue: '^2.3.0'
          }

          return JSON.stringify(purifiedContent, [
            'name',
            'version',
            'description',
            'keywords',
            'homepage',
            'bugs',
            'files',
            'main',
            'author',
            'license',
            'peerDependencies', 'vue',
            'repository', 'type', 'url'
          ], 2)
        }
      }
    ])
  ]
}
