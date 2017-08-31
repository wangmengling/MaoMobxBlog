
    window.onload = () => {
//          获取到对应的输入输出节点
        const titleInput = document.getElementById('titleInput');
        let titleOutput = document.getElementById('titleOutput');
//          默认选中方便用户删除
        titleInput.select();
//          节流函数避免连续触发事件
        let throttle = (method) => {
            method.tId && clearTimeout(method.tId);
            method.tId = setTimeout(function () {
                method();
            }, 140);
        };
//          输出标题的函数
        let addTitle = () => {
            titleOutput.innerHTML = titleInput.value;
        };
//          输出默认的占位符
        addTitle();
//          绑定按下键盘触发，keypress对功能键、中文输入法没有反应
        titleInput.addEventListener('keyup', () => {
            throttle(addTitle);
        });
//              定义标题循环次数
        const circles = 6;
//              处理html标签
        const reg1 = /(<)([^>]+)(>)/g;
//              判断是否需要循环
        const reg2 = /^ *#{1,6}(( +[^\s]|[^#\s]).*)/gm;
//              reg3用来循环改变标题
        let reg3;
//              给符合格式的创建ul和li
        const reg4 = /(^ *|<\/.+>) *- (\S.*)/gm;
//              给符合格式的创建ol和li
        const reg5 = /(^ *|\/.+>) *\d\. (\S.*)/gm;
//              去掉多余的ul、ol
        const reg6 = /<\/([uo]l)>\n? *<\1>/g;
//              blockquote
        const reg7 = /(^ *|\/.+>) *&gt; ((\S.*\n?)+)/gm;
//              单行代码
        const reg8 = /(^ *|\/.+>) *`([^`\n]+)`/gm;
//              代码块
        const reg9 = /~~~\n((.*\n)+)~~~/g;
//              br
        const reg10 = /([^>\n]+)\n/g;
        const articleInput = document.getElementById('articleInput');
        let articleOutput = document.getElementById('articleOutput');
//         输出文章的函数
        let addArticle = () => {
            articleOutput.innerHTML = articleInput.value
                .replace(reg1, '<<span>$2</span>>');
            if (articleInput.value.match(reg2)) {
                for (let i = circles; i > 0; i--) {
                    reg3 = new RegExp(`^ *(#{${i}})(( +[^\s]|[^#\s]).*)(\n?)`, 'gm');
                    articleOutput.innerHTML = articleOutput.innerHTML.replace(reg3, `<h${i}>$2</h${i}>`);
                }
            }
            articleOutput.innerHTML = articleOutput.innerHTML.replace(reg4, '$1<ul><li>$2</li></ul>')
                .replace(reg5, '$1<ol><li>$2</li></ol>').replace(reg6, '')
                .replace(reg7, '$1<blockquote>$2</blockquote>')
                .replace(reg8, '<pre>$2</pre>')
                .replace(reg9, '<pre>$1</pre>').replace(reg10, '$1<br>');
        };
//          绑定按下键盘触发
        articleInput.addEventListener('keyup', () => {
            throttle(addArticle);
        })
    }