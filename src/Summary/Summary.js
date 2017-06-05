import React,{Component} from 'react'
import './Summary.scss'

class Summary extends Component {
    constructor(props){
        super(props)
        console.log("dddddddd");
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
                    2017-03-15
                </div>
                <div  className='SummaryContent'>
                    {aritcleData.summary}
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