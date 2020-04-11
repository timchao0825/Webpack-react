const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const root_directory = path.join(__dirname, '..')
const src_directory = path.join(root_directory, 'src')

const config = {
  entry: [path.resolve(__dirname, '../src/App.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules']
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(src_directory, 'index.html')
    }),
    new CopyWebpackPlugin([
      { 
        from: path.join(src_directory, 'assets'), 
        to: path.join(root_directory, 'build') 
      }
    ])
  ],
  module: {
    rules: [
      { 
        test:  /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        exclude: /node_modules/, 
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

module.exports = config
