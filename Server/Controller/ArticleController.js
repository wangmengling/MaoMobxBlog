import Article from '../Models/Article'

class ArticleController {

    async addArticle(ctx) {
        ctx.type = 'json';
        let { title, content } = ctx.request.body;
        let article = new Article({
            username: 'wangguozhong',
            // 简介
            summary: title,
            // 内容
            content: content,
            // 时间
            time : '1496577824',
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
        let { pageIndex, num } = ctx.request.body;
        let article = new Article();
        let articleData = await article.getAll();
        ctx.body = articleData ? articleData : 'no data';
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
} 

export default ArticleController;