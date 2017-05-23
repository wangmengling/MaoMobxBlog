/**
 * @file 用户对象类
 * @author dongkunshan
 */

import Base from './Base';

class User extends Base {
    constructor(obj) {
        super();
        if (obj) {
            // 用户唯一id
            // this.id = obj.id || '';
            if (obj._id) {
                this._id = obj._id;
            }
            this.id = obj.id || '';
            // 用户登录名
            this.username = obj.username || '';
            // 用户密码
            this.password = obj.password || '';
            // 用户邮箱
            this.email = obj.email || '';
            // 用户手机号
            this.phone = obj.phone || '';
        }
        console.log(this);
        // 存储用主要键名，相当于表名
        this.storekey = 'users';
        // 需要检索的主要字段，相当于索引
        this.index = ['username', 'email', 'phone'];
    }

    // 根据需要获取指定数据id，转由父类通用方法获取数据
    list() {
        return super.getList({
            username: {
                $regex: /^em/
            }
        });
    }

    getOne() {
        return super.getOne({
            username: this.username,
            password: this.password
        });
    }
}

export default User;
