import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Detail.scss'
class Detail extends Component {

    componentWillMount(){
        console.log("------");
        console.log(this.props.articleModel);
        console.log(this.props.articleModel.location.state.articleModel);
        console.log("------");
    }

    render() {
        return (
            <div className="DetailContent">
                    <div className="DetailTitle title">
                        <div>
                            <font className="DetailTitleFont">{this.props.articleModel.location.state.articleModel.title}</font>
                        </div>
                        
                        <div className="DetailEditButton">
                            <Link to="/admin/editor">
                            <span className="button">
                                编辑
                                </span>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="DetailContentShow"> 
                        <div className="content">
                            {this.props.articleModel.location.state.articleModel.content}
                        </div>
                    </div>
                    <div className="DetailContentBottom ">
                            <span className="tag">Tag</span>
                    </div>
                </div>
        );
    }
}
export default Detail;