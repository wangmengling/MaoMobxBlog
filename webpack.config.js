var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
      // 'app':[
      //       'react-hot-loader/patch',
      //       'webpack-dev-server/client?http://localhost:3001',
      //       'webpack/hot/only-dev-server',
      //       './App/index',
      //   ],
        'admin':[
            'react-hot-loader/patch',
            // 'webpack-dev-server/client?http://localhost:3001',
            // 'webpack/hot/only-dev-server',
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
      path.join(__dirname, './Admin'),
      path.join(__dirname, './static')
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
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
      // ,
      // { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
      //   loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      // }
    ],
  }
};
