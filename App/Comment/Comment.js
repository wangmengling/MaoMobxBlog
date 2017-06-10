import React,{Component} from 'react';
import "./Comment.scss"
class Comment extends Component {
    render() {
        return(
            <div className="Comment">
                <div className="CommentUserIcon">
                    <img  data-role="user-avatar" data-user="26260803" src="https://c.disquscdn.com/uploads/users/2626/803/avatar92.jpg?1496886964" alt="头像" />
                </div>
                <div className="CommentDetail">
                    <div className="CommentNickNameAndTime">
                        <div className="CommentNickName">WangMaoLing</div>
                        <div className="CommentTime">1各月之前</div>
                    </div>
                    <div className="CommentContent">
                        喵神

                        文中 提到"init(coder:) 中加载目标 nib 然后将它作为 subview 添加到目标 view 中"
                        这个搞法... 鄙人愚钝 望能给个demo学习一下

                        nib确实对继承很无没办法搞得 但我从 http://blog.sunnyxx.com/201... 答案

                        话说 我看到文章 有一句 "在我这么几年的使用经验来看" 喵神谦虚了 其实 用"这么多年"也不为过 你可是iOS领域的领袖啊！每一篇文章可以说 都是掷地有声，让我等叹服.
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;