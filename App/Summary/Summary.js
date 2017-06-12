import React,{Component} from 'react'
import {
  Link,
  Redirect
} from 'react-router-dom'


import './Summary.scss'

class Summary extends Component {
    constructor(props){
        super(props)
        this.state = {
            aritcleData:this.props.aritcleData
        }
   }

    render() {
        const aritcleData = this.props.aritcleData;
        return (
            <div className='Summary'>
                <div className='SummaryTitle'>
                    {aritcleData.title}
                </div>
                <div className='SummaryTime'>
                    {this.getLocalTime(aritcleData.time)}
                </div>
                <Link to={{
                    pathname: '/blogDetail',
                    state: { aritcleData: aritcleData }
                }}>
                <div  className='SummaryContent'>
                    {aritcleData.summary}
                </div>
                </Link>
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

export default Summary;