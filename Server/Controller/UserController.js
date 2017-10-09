import User from '../Models/User';
import jwt from 'jsonwebtoken';
const secret = 'MaoMboxBlog'; // 指定密钥，这是之后用来判断 token 合法性的标志
class UserController {

    async register(ctx) {
        // let user = new User({
        //     // id: 1,
        //     _id: '58d33395c20b8f479689d597',
        //     username: 'wangguozhong',
        //     password: '111111',
        //     email: '424080998@qq.com',
        //     phone: '15828581089'
        // });
        let data;
        // let { username, password } = ctx.request.body;
        const username = 'wangmaoling';
        const password = '111111';
        let user = new User({ username, password });
        try {
            let ret = await user.getOne();
            if (ret) {
                data = {
                    code: 200,
                    msg: "用户名已存在",
                    data:{'username':ret.username}
                };
            } else {
                user.token = jwt.sign({
                    user_id: user.username,
                    }, secret, {
                    expiresIn: '12h' //那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
                })
                let ret = await user.add();
                data = {
                    code: 200,
                    msg: "注册成功",
                    data:{'username':username,'token':user.token}
                };
            }
        } catch (error) {
            data = {
                code: 500,
                error:error,
                msg: "注册错误"
            };
        }
        ctx.body = data;
    }

    async login(ctx) {
        ctx.type = 'json';
        let { username, password } = ctx.request.body;
        let user = new User({ username, password });
        let ret = await user.getOne();
        let data;
        if (ret) {
            const token = jwt.sign({
                user_id: ret._id,
                }, secret, {
                expiresIn: '12h' //过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
            });
            data = {
                code: 200,
                data: ret,
                token: token,
                msg: "登录成功"
            };
        }
        else {
            data = {
                code: 0,
                msg: "用户名或密码错误"
            };
        }
        ctx.status = 200
        ctx.body = data;
    }
}
export default UserController;