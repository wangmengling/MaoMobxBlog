import Article from '../Models/Article'

class ArticleController {

    async addArticle(ctx) {
        console.log('update');
        let article = new Article({
            // id: 1,
            _id: '58d33395c20b8f479689d592',
            id: '58d33395c20b8f479689d592',
            username: 'wangguozhong',
            // 简介
            summary: 'Swift 团队最近在邮件列表里向社区发了一封邮件，讲述了关于内存所有权方面的一些未来的改变方向。作为上层 API 的使用者来说，我们可能并不需要了解背后所有的事实，但是 Apple 的这封邮件中对 Swift 的值和对象的内存管理进行了很全面的表述，一步步说明了前因后果。如果你想深入学习和了解 Swift 的话，这篇文章是非常棒的参考资料。我尝试翻译了一下全文，并且加上了一些自己的注解。虽然这篇文章比较长，但是如果你想要进阶 Swift 的话，不妨花时间通读全文 (甚至通读全文若干遍)。',
            // 内容
            content: 'Swift 团队最近在邮件列表里向社区发了一封邮件，讲述了关于内存所有权方面的一些未来的改变方向。作为上层 API 的使用者来说，我们可能并不需要了解背后所有的事实，但是 Apple 的这封邮件中对 Swift 的值和对象的内存管理进行了很全面的表述，一步步说明了前因后果。如果你想深入学习和了解 Swift 的话，这篇文章是非常棒的参考资料。我尝试翻译了一下全文，并且加上了一些自己的注解。虽然这篇文章比较长，但是如果你想要进阶 Swift 的话，不妨花时间通读全文 (甚至通读全文若干遍)。如果你没有时间通读全文，又想简单了解一下到底发生了什么的话，可以往下翻到最后，有一个我自己的简易的总结版本。这篇文档本身是对今后 Swift 方向的一个提案，所以涉及的关键字和具体实现细节可能会有出入，不过这并不影响文章背后的思想。您可以在 Swift 的 repo 里找到这篇文档的原文。这篇文章很长，读起来会比较花时间，不过因为内容还算循序渐进，只要静下心来就不会有太多困难。我在有些部分添加了个人的注解，会补充介绍一些背景知识和我自己的看法，你可以将它看成是我个人在读译本文时的笔记 (和吐槽)，它们将以 “译者注” 的方式在文中以引出出现。不过只是一家之言，仅供参考，还望斧正。',
            // 时间
            time : '1496577824',
            // 标题
            title:'所有权宣言 - Swift 官方文章 Ownership Manifesto 译文评注版'
        });
        let ret = await article.add();
        let articleData = await article.getAll();
        console.log('update: ' + articleData);
        ctx.body = articleData ? articleData : 'no data';
        // ctx.body = 'no data';
    }

    async  getList(ctx) {
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