var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {test: /\.css$/, loader: 'style-loader!css-loader'},                      /*css to css*/
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},  //limit=8192表示图片大小单位是k  小于这个值走内联大于这个值走外联             /*images 打包*/
            {test: /\.less$/, loader: "style!css!less"},
            {test: /\.scss$/, loader: "style!css!sass"},                 /*less to css*/
            {
              test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: "url?limit=10000"
            },
            {
              test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
              loader: 'file'
            } 
    ]
  }
};
