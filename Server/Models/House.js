/**
 * @file 用户对象类
 * @author dongkunshan
 */

import Base    from './Base';
import moment  from 'moment';
import mongodb from 'mongo-db';
import config  from '../config/db.config';

const connectionStr = `mongodb://${config.mongodb.user}:${config.mongodb.pass}`
    + `@${config.mongodb.ip}:${ config.mongodb.port}/${config.mongodb.db}`;

class House extends Base {
    constructor(obj) {
        super();
        if (obj) {
            // 唯一id
            if (obj._id) {
                this._id = obj._id;
            }
            // 标题
            this.title = obj.title;
            // 类型 0:租 1:售 2:租售
            this.type = obj.type;
            // 录入时间
            this.creatDate = obj.creatDate || moment().format('YYYY-MM-DD hh:mm:ss');
            // 更新时间
            this.updateDate = obj.updateDate || moment().format('YYYY-MM-DD hh:mm:ss');
            // 地址
            this.address = obj.address;
            // 售价
            this.sellPrice = obj.sellPrice;
            // 租金
            this.rentPrice = obj.rentPrice;
            // 租金类型 0:月租,1:季租,2:半年租,3:整年租,4:多年租
            this.rentType = obj.rentType;
            // 大小
            this.square = obj.square;
            // 楼层
            this.floor = obj.floor;
            // 总楼层
            this.totalFloor = obj.totalFloor;
            // 卧室
            this.bedroom = obj.bedroom;
            // 客厅
            this.drawingroom = obj.drawingroom;
            // 卫生间
            this.toilet = obj.toilet;
            // 装修 0:豪装,1:精装,2:中装,3:简装,4:毛坯
            this.decorate = obj.decorate;
            // 类型 0:主卧,1:次卧,2:隔断,3:整租
            this.roomtype = obj.roomtype;
            // 朝向
            this.orientation = obj.orientation || '';
            // 限制 0:男,1:女,2:男女不限
            this.roomlimit = obj.roomlimit || 2;
            // 房主称呼
            this.owner = obj.owner;
            // 房主联系电话
            this.tel = obj.tel;
            // 标签
            this.tag = obj.tag || [];
            // 照片
            this.imgs = obj.imgs || ['http://dongkunshan.cn/assets/imgs/house.png'];
            // 状态 0:有效,1:无效
            this.status = obj.status || 0;
        }
        // 存储用主要键名，相当于表名
        this.storekey = 'house';
        // 需要检索的主要字段，相当于索引
        this.index = ['title', 'square', 'sellPrice', 'rentPrice'];
    }

    static async top(number) {
        let ret;
        try {
            // getAll
            const db  = new mongodb(connectionStr, 'house', true);
            ret = await db.find({}, {}, 0, number, {
                _id: -1
            });
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }

    static async search(keyword, pageNum, pageSize) {
        let ret;
        try {
            // get by query
            const db  = new mongodb(connectionStr, 'house', true);
            ret = await db.find({
                title: {
                    $regex: keyword
                }
            }, {}, (pageNum - 1) * pageSize, pageSize, {
                _id: -1
            });
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }

    static async fetch(opt) {
        let ret;
        try {
            // get by query
            const db  = new mongodb(connectionStr, 'house', true);
            ret = await db.find(opt.query, {}, (opt.pageNum - 1) * opt.pageSize, opt.pageSize, {
                _id: -1
            });
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }

    static async list(opt) {
        let ret;
        try {
            // get by query
            const db  = new mongodb(connectionStr, 'house', true);
            ret = await db.find({
                price: {
                    $gt: opt.price
                }
            });
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }

    static async adds(objs) {
        let ret;
        try {
            const db  = new mongodb(connectionStr, 'house', true);
            // insert db
            ret = await db.insertMany(objs);
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

    static async detail(id) {
        let ret;
        try {
            // get by query
            const db  = new mongodb(connectionStr, 'house', true);
            ret = await db.findOne({
                _id: id
            });
            console.log(ret);
        }
        catch (e) {
            console.log(e);
            return ret;
        }
        return ret;
    }
}

export default House;
