var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
      'app':[
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './App/index',
        ],
        'admin':[
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './Admin/Index'
        ]
  } , 
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './App'),
      path.join(__dirname, './Admin')
    ]
  },
  module: {
    rules: [{
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
          // include: path.join(__dirname, 'App')
      }, {
          test: /\.(less|css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
      }, {
          test: /\.(png|jpg|gif|md)$/,
          use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
      }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: ['url-loader?limit=10000&mimetype=image/svg+xml']
      }],
  }
};
