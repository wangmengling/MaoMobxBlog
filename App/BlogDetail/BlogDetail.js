import React,{Component} from 'react'
import Comment from '../Comment/Comment'
import './BlogDetail.scss'

class BlogDetail extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             aritcleData:this.props.aritcleData
//         }
//    }
    render() {
        console.log(this.props);
        const { aritcleData } = this.props.location.state || { aritcleData: { pathname: '/' } }
        return (
            <div className='Detail'>
                <div className='DetailTitle'>
                    {aritcleData.title}
                </div>
                <div className='DetailTime'>
                    {this.getLocalTime(aritcleData.time)}
                </div>
                <div  className='DetailContent'>
                    {aritcleData.content}
                </div>
                <div className='DetailBottom'>
                    <div className='DetailTag'>
                        <i className='DetailTagCategory'>
                        </i>
                        {aritcleData.category}
                        <i className='DetailTagIcon'>
                        </i>
                        {aritcleData.tag}
                    </div>
                    <div className='DetailComment'>
                        <i className="DetailCommentIcon"> </i>
                        <div className='DetailCommentNum'>
                            {aritcleData.comment}
                        </div>
                        
                    </div>
                </div>
                <div className="DetailCommentList">
                    <Comment />
                </div>
            </div>
        );
    }

    getLocalTime(nS) {     
        return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,19)
    } 
}

export default BlogDetail;