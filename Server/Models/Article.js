/**
 * @file 用户对象类
 * @author dongkunshan
 */

import Base    from './Base';
import mongodb from 'mongo-db';
// import config  from '../config/db.config';
// const connectionStr = `mongodb://${config.mongodb.user}:${config.mongodb.pass}`
// + `@${config.mongodb.ip}:${ config.mongodb.port}/${config.mongodb.db}`;

class Article extends Base {
    constructor(obj) {
        super();
        if (obj) {
            // 用户唯一id
            // this.id = obj.id || '';
            if (obj._id) {
                this._id = obj._id;
            }
            this.id = obj.id || '';
            // 用户名
            this.username = obj.username || '';
            // 简介
            this.summary = obj.summary || '';
            // 内容
            this.content = obj.content || '';
            // 时间
            this.time = obj.time || '';
            // 标题
            this.title = obj.title || '';
            this.category = obj.category || '';
            this.tag = obj.tag || '';
            this.comment = obj.comment || '0';
            this.view = obj.view || '0';
        }
        console.log(this);
        // 存储用主要键名，相当于表名
        this.storekey = 'article';
        // 需要检索的主要字段，相当于索引
        this.index = ['id'];
    }

    // 根据需要获取指定数据id，转由父类通用方法获取数据
    list() {
        return super.getList({
            title: {
                $regex: /^em/
            }
        });
    }


    // 通用获取指定数据
    async getList(obj) {
        console.log('base getList');
        let ret;
        try {
            // get by query
            const db  = new mongodb(connectionStr, this.storekey, true);
            ret = await db.find(obj.query, {}, (obj.pageIndex) * obj.pageSize, obj.pageSize, {
                time: -1
            });
        }
        catch (e) {
            return ret;
        }
        return ret;
    }

    getOne() {
        return super.getOne({
            id: this.id
        });
    }
}

export default Article;
