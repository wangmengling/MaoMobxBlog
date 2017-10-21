import Article from '../Models/Article'

class ArticleController {

    async addArticle(ctx) {
        ctx.type = 'json';
        let { title, content } = ctx.request.body;
        let time = Date.parse(new Date()) ;
        let article = new Article({
            username: 'wangguozhong',
            // 简介
            summary: title,
            // 内容
            content: content,
            // 时间
            time : time,
            // 标题
            title: title,
            category: 'React, Koa',
            comment: "4",
            tag: '#React, #Koa'
        });
        console.log(article);
        let ret = await article.add();
        let articleData = await article.getAll();
        console.log('update: ' + articleData);
        ctx.body = articleData ? articleData : 'no data';
        // ctx.body = 'no data';
    }

    async  getList(ctx) {
        let { pageIndex, pageSize } = ctx.request.body;
        let article = new Article();
        let obj = {pageIndex:pageIndex,pageSize:pageSize};
        let articleData = await article.getList(obj);

        let count = await article.count();
        let data;
        if (articleData) {
            data = {
                code: 0,
                data: {pageTotal:count/pageSize,list:articleData},
                msg: "获取成功"
            };
        }
        else {
            data = {
                code: 1,
                msg: "获取失败"
            };
        }
        ctx.body = data; 
    }

    async  getOne(ctx) {
        ctx.type = 'json';
        let article = new Article(ctx.request.body);
        let ret = await article.getOne();
        let data;
        if (ret) {
            ctx.session.article = ret;
            data = {
                code: 0,
                jump: '/home/view/addHouse',
                msg: "获取成功"
            };
        }
        else {
            data = {
                code: 1,
                msg: "获取失败"
            };
        }
        ctx.body = data; 
    }

    async deleteArticle(ctx) {
        ctx.type = 'json';
        let params = {_id:ctx.request.body.articleId};
        let article = new Article(params);
        let ret = await article.del();
        let data;
        if (ret) {
            ctx.session.article = ret;
            data = {
                code: 200,
                msg: "删除成功"
            };
        }
        else {
            data = {
                code: 0,
                msg: "删除失败"
            };
        }
        ctx.body = data; 
    }
} 

export default ArticleController;