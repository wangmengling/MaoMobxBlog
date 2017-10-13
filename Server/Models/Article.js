/**
 * @file 用户对象类
 * @author dongkunshan
 */

import Base from './Base';

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

    getOne() {
        return super.getOne({
            id: this.id
        });
    }
}

export default Article;
