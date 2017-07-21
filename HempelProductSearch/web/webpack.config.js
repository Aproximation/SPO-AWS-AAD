const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'js/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-2' ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
    ]
  },
  target: 'web',
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([ {
      from: 'index.html',
      to: 'index.html'
    } ])
  ]
};
