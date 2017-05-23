/**
 * @file 对象基类
 * @author dongkunshan
 */

import mongodb from 'mongo-db';
import config  from '../Config/db.config';

const connectionStr = `mongodb://${config.mongodb.user}:${config.mongodb.pass}`
    + `@${config.mongodb.ip}:${ config.mongodb.port}/${config.mongodb.db}`;

class Base {
    // 通用增加
    async add() {
        console.log('base add');
        let ret;
        try {
            const db  = new mongodb(connectionStr, this.storekey, true);
            // insert db
            ret = await db.insert(this);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        if (ret.result.ok !==1 || ret.result.n === 0) {
            return false;
        }
        return true;
    }

    // 通用删除
    async del() {
        console.log('base del');
        let ret;
        try {
            // delete data
            const db  = new mongodb(connectionStr, this.storekey, true);
            ret = await db.remove({
                _id: this._id
            }, true);
            console.log(ret);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        if (ret.result.ok !==1 || ret.result.n === 0) {
            return false;
        }
        return true;
    }

    // 通用更新
    async update() {
        console.log('base update');
        let ret;
        try {
            // update data
            const db  = new mongodb(connectionStr, this.storekey, true);
            console.log(db);
            ret = await db.update({
                _id: this._id
            }, this);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        if (ret.result.ok !== 1 || ret.result.n === 0) {
            return false;
        }
        return true;
    }

    // 通用单条数据获取
    async getOne(obj) {
        console.log('base getOne');
        let ret;
        try {
            // get by query
            const db  = new mongodb(connectionStr, this.storekey, true);
            ret = await db.findOne(obj);
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }

    // 通用全量数据获取
    async getAll() {
        console.log('base getAll');
        let ret;
        try {
            // getAll
            const db  = new mongodb(connectionStr, this.storekey, true);
            ret = await db.find();
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }

    // 通用获取指定数据
    async getList(obj) {
        console.log('base getList');
        let ret;
        try {
            // get by query
            const db  = new mongodb(connectionStr, this.storekey, true);
            ret = await db.find(obj);
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }
}

export default Base;
