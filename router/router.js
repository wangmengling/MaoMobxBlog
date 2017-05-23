var router = require('koa-router')();
import UserController from '../Server/Controller/UserController.js'

router.get('/api/v1/list', function (ctx, next) {
  ctx.body = 'this a users list!';
});

router.get('/api/v1/user/register',async function (ctx, next){
  let userController = new UserController();
  await userController.register(ctx);
});

module.exports = router;