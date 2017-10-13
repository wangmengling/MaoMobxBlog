import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {observer} from 'mobx-react';
import {autorun} from 'mobx';
import './List.scss'
@observer
class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            title:"asdfasd"
        }
   }

   componentWillMount(){
        this.props.store.getArticleList()
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
                <div className="ListPage">
                    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                        <a className="pagination-previous">Previous</a>
                        <a className="pagination-next">Next page</a>
                        <ul className="pagination-list">
                            <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                            <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                            <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                        </ul>
                    </nav>
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