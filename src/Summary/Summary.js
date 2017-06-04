import React,{Component} from 'react'
import './Summary.scss'

class Summary extends Component {
    render() {
        return (
            <div className='Summary'>
                <div className='SummaryTitle'>
                    我的博客
                </div>
                <div className='SummaryTime'>
                    2017-03-15
                </div>
                <div  className='SummaryContent'>
                    从博客搭建好以来一直使用着多说作为评论系统，
                    虽然多说有着不少的黑点，比如上了HTTPS后失去地址栏绿锁，
                    也听说过多说有各种各样的bug，
                    服务器故障导致评论框不出现更是没少见过，
                    不过以后再也不能黑多说了。从博客搭建好以来一直使用着多说作为评论系统，
                    虽然多说有着不少的黑点，比如上了HTTPS后失去地址栏绿锁，
                    也听说过多说有各种各样的bug，
                    服务器故障导致评论框不出现更是没少见过，
                    不过以后再也不能黑多说了。
                </div>
                <div className='SummaryBottom'>
                    <div className='SummaryTag'>
                        <i className='SummaryTagCategory'>
                        </i>
                        React, Koa
                        <i className='SummaryTagIcon'>
                        </i>
                        #React, #Koa
                    </div>
                    <div className='SummaryComment'>
                        <i className="SummaryCommentIcon"> </i>
                        <div className='SummaryCommentNum'>
                            213
                        </div>
                        
                    </div>
                </div>
                <div className="SummaryBottomLine">

                </div>
            </div>
        );
    }
}

export default Summary;