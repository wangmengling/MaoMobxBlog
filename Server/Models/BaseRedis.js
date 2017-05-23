/**
 * @file 对象基类
 * @author dongkunshan
 */

import redis  from 'promise-redis';
import config from '../Config/db.config';

// 创建数据连接
let db = redis().createClient({
    password: config.redis.pass,
    port: config.redis.port,
    host: config.redis.ip
});

// 捕获数据连接错误
db.on('error', function (err) {
    console.log('' + err);
});

class Base {
    // 通用增加
    async add() {
        console.log('base add');
        try {
            // get id
            let id = await db.incr(this.storekey + 'id');
            this.id = id;

            // insert data
            await db.multi()
            .hset(this.storekey, id, JSON.stringify(this))
            .rpush(this.storekey + ':id', id).exec();

            // insert index
            const promises = this.index.map((attr) => {
                db.sadd(this.storekey + ':' + attr + ':' + this[attr], id);
            });
            await Promise.all(promises);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    // 通用删除
    async del() {
        console.log('base del');
        try {
            // get id
            let id = this.id;

            // delete data
            await db.multi()
            .hdel(this.storekey, id)
            .lrem(this.storekey + ':id', 1, id).exec();

            // delete index
            const promises = this.index.map(async (attr) => {
                let count = await db.scard(this.storekey + ':' + attr + ':' + this[attr]);
                console.log(this.storekey + ':' + attr + ':' + this[attr]);
                console.log(count);
                if (count > 1) {
                    db.srem(this.storekey + ':' + attr + ':' + this[attr], id);
                }
                else {
                    db.del(this.storekey + ':' + attr + ':' + this[attr]);
                }
            });
            await Promise.all(promises);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    // 通用更新
    async update() {
        console.log('base update');
        try {
            // get id
            let id = this.id;

            // update data
            await db.hset(this.storekey, id, JSON.stringify(this));
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    // 通用单条数据获取
    async getOne(obj) {
        console.log('base getOne');
        try {
            // get id
            let id = this.id;

            // get data from id
            return await db.hget(this.storekey, id);
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    // 通用全量数据获取
    async getAll() {
        console.log('base getAll');
        try {
            // get data from moudle
            return await db.hvals(this.storekey);
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    // 通用获取指定数据
    async getList(ids) {
        console.log('base getList');
        try {
            // get data from ids
            return await db.hmget(this.storekey, ids);
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}

export default Base;
