import Article from '../Models/Article'

class ArticleController {

    async addArticle(ctx) {
        console.log('update');
        let article = new Article({
            // id: 1,
            _id: '58d33395c20b8f479689d597',
            id: '58d33395c20b8f479689d597',
            username: 'wangguozhong',
            // 简介
            summary: '第一篇文章',
            // 内容
            content: '第一篇文章',
            // 时间
            time : '1496577824',
            // 标题
            title:'第一篇文章'
        });
        let ret = await article.add();
        let articleData = await article.getAll();
        console.log('update: ' + articleData);
        ctx.body = articleData ? articleData : 'no data';
        // ctx.body = 'no data';
    }

    async  getList(ctx) {
        console.log('update');
        let article = new Article();
        let articleData = await article.getAll();
        console.log('update: ' + articleData);
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