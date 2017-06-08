import React,{Component} from 'react'
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
        // const { aritcleData } = this.props.location.state || { aritcleData: { pathname: '/' } }
        return (
            <div className='Summary'>
                <div className='SummaryTitle'>
                    {aritcleData.title}
                </div>
                <div className='SummaryTime'>
                    {this.getLocalTime(aritcleData.time)}
                </div>
                <div  className='SummaryContent'>
                    {aritcleData.summary}
                </div>
                <div className='SummaryBottom'>
                    <div className='SummaryTag'>
                        <i className='SummaryTagCategory'>
                        </i>
                        {aritcleData.category}
                        <i className='SummaryTagIcon'>
                        </i>
                        {aritcleData.tag}
                    </div>
                    <div className='SummaryComment'>
                        <i className="SummaryCommentIcon"> </i>
                        <div className='SummaryCommentNum'>
                            {aritcleData.comment}
                        </div>
                        
                    </div>
                </div>
                <div className="SummaryBottomLine">

                </div>
            </div>
        );
    }

    getLocalTime(nS) {     
        return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,19)
    } 
}

export default BlogDetail;