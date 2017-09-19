import Static from 'koa-static';
import Send from 'koa-send';
import Koa from 'koa';
import path from 'path';
import session from 'koa-session'
import bodyParser from 'koa-bodyparser'
const app = new Koa();

// import middleware from 'koa-webpack';

// x-response-time
app.use(bodyParser())
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

app.keys = ['davinci']
app.use(
  session(
      {
          key: 'koa:sess',
          maxAge: 86400000,
          overwrite: true,
          httpOnly: true,
          signed: true,
          rolling: false,
      },
      app
  )
)

//Api router--------
import Router from './router/router';

app.use(Router.routes());
app.use(Static(path.join(__dirname, 'static')));
// app.use(Static(path.join(__dirname, 'static')));
// app.use(async (ctx) => {
//   await Send(ctx, '/static/index.html');
// })
app.use(async (ctx) => {
  await Send(ctx, '/static/Admin.html');
})
// app.use(async (ctx) => {
//   await Send(ctx, '/static/index.html');
// })
app.listen(3001);