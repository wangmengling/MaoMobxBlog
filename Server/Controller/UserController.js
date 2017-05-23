import User from '../Models/User';

class UserController {

    async register(ctx) {
        console.log('update');
        let user = new User({
            // id: 1,
            _id: '58d33395c20b8f479689d597',
            username: 'wangguozhong',
            password: '111111',
            email: '424080998@qq.com',
            phone: '15828581089'
        });
        let ret = await user.add();
        let userData = await user.getAll();
        console.log('update: ' + userData);
        ctx.body = userData ? userData : 'no data';
    }

    async login(obj) {
        ctx.type = 'json';
        let user = new User(ctx.request.body);
        let ret = await user.getOne();
        let data;
        if (ret) {
            ctx.session.user = ret;
            data = {
                code: 0,
                jump: '/home/view/addHouse',
                msg: "登录成功"
            };
        }
        else {
            data = {
                code: 1,
                msg: "用户名或密码错误"
            };
        }
        ctx.body = data;
    }
}
export default UserController;