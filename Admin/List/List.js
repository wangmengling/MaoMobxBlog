import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {observer} from 'mobx-react';
import {autorun} from 'mobx';
import Pager from '../Pager/Pager'
import './List.scss'
@observer
class List extends Component {

    constructor(props) {
		super(props);

		this.handlePageChanged = this.handlePageChanged.bind(this);

		this.state = {
			total:       11,
			current:     7,
            visiblePage: 3,
            title: ""
        };
        this.props.store.getArticleList()
	}

	handlePageChanged(newPage) {
        this.setState({ current : newPage });
        console.log(newPage);
	}



   componentWillMount(){
        
   }

   nextPage(){

   }

   prePage(){

   }

   page(){

   }
     
    render() {
        return (
            <div className="List">
                <div className="ListFilters">

                </div>
                <div className="ListContent">
                <table className="table">
                    <thead>
                        <tr>
                        <th>名字</th>
                        <th><abbr title="Played">日期</abbr></th>
                        <th><abbr title="Drawn">阅读量</abbr></th>
                        <th><abbr title="Points">标签</abbr></th>
                        <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.store.articleList.map(
                            (atricleModel, idx) => <TableTr atricleModel={atricleModel} key={idx} />
                        ) }
                    </tbody>
                    </table>
                </div>
                <div>
                    <Pager
                        total={this.state.total}
                        current={this.state.current}
                        visiblePages={this.state.visiblePage}
                        titles={{ first: '1', last: this.state.total }}
                        className="pagination is-centered"
                        onPageChanged={this.handlePageChanged}
                    />
                </div>              
            </div>
        );
    }
};

export default List;


const TableTr = (atricleModel,key) => {
    console.log(atricleModel);
        return (
            <tr>
            <td>
                <Link to="/Admin/Detail" >
                    {atricleModel.atricleModel.title}
                </Link>
            </td>
            <td>
                    {atricleModel.atricleModel.time}
            </td>
            <td>
                {atricleModel.atricleModel.view}
            </td>
            <td>
                {atricleModel.atricleModel.tag}
            </td>
            <td>
                <Link to="/Admin/Detail" >
                    编辑
                </Link>
            </td>
            </tr>
        )
}