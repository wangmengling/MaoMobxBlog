var router = require('koa-router')();
import Send from 'koa-send';
import UserController from '../Server/Controller/UserController.js'
import ArticleController from '../Server/Controller/ArticleController.js'
import tokenContent from './Auth.js';
// router.get('/api/v1/article/addArticle/admin',async function (ctx, next){
//   await Send(ctx, '/static/Admin.html');
// });

router.get('/api/v1/list',tokenContent, function (ctx, next) {
  ctx.body = 'this a users list!';
});

router.post('/api/v1/user/login',async function (ctx, next){
  let userController = new UserController();
  await userController.login(ctx);
});

router.get('/api/v1/user/register',async function (ctx, next){
  let userController = new UserController();
  await userController.register(ctx);
});

router.get('/api/v1/article/addArticle',async function (ctx, next){
  let articleController = new ArticleController();
  await articleController.addArticle(ctx);
});

router.get('/api/v1/article/getList',tokenContent,async function (ctx, next){
  let articleController = new ArticleController();
  await articleController.getList(ctx);
});


module.exports = router;