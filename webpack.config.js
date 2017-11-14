var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const VENOR = [
"react",
"react-dom",
"react-lz-editor",
"mobx",
"mobx-react"
]

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
        ],
        vendor: VENOR
  } , 
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      // vendor 的意义和之前相同
      // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
        names: ['vendor', 'manifest', "admin"],
        // 配合 manifest 文件使用
        minChunks: Infinity
    }),
    // 只删除 dist 文件夹下的 bundle 和 manifest 文件
    new CleanWebpackPlugin(['dist/*.bundle.js','dist/manifest.*.js'], {
      // 打印 log
        verbose: true,
        // 删除文件
        dry: false
      }),
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
