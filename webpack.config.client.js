const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  context: srcPath,
  target: 'web',
  entry: './client/index.js',
  output: {
    path: distPath,
    filename: 'client.js',
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }, {
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        loader: 'file-loader?name=asset/fonts/[name].[ext]',
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=asset/images/[name].[ext]',
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: `${srcPath}/index.html` },
      { from: `${path.resolve(__dirname)}/node_modules/font-awesome/fonts`, to: 'fonts' },
      { from: `${path.resolve(__dirname)}/node_modules/font-awesome/css/font-awesome.min.css`, to: 'css' }
    ]),
    new HtmlWebpackPlugin({
      hash: true,
      template: `${srcPath}/index.html`,
    }),
    new ExtractTextPlugin('main.css'),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true, // BrowserRouter error
  },
};
