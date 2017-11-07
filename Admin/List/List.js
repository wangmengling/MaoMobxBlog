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
        // this.deleteArticle = this.deleteArticle.bind(this);
        this.props.store.getArticleList(this.props.store.pageIndex)
	}

	handlePageChanged(newPage) {
        this.props.store.getArticleList(newPage)
    }
    
    deleteArticle(articleModel) {
        this.props.store.deleteArticle(articleModel._id);
    }

    componentWillMount(){
        this.props.store.deleteData = null;
        this.addAutoRun()
    }

    addAutoRun(){
        autorun(() => {
            if (this.props.store.deleteData != null && this.props.store.deleteData.code == 1) {
                this.props.store.getArticleList(this.props.store.pageIndex)
            }
        })
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
                            (articleModel, idx) => <TableTr articleModel={articleModel} key={idx} onClick={this.deleteArticle.bind(this,articleModel)}/>
                        ) }
                    </tbody>
                    </table>
                </div>
                <div>
                    <Pager
                        total={this.props.store.pageTotal}
                        current={this.props.store.pageIndex}
                        visiblePages={this.props.store.pageSize}
                        titles={{ first: '1', last: this.props.store.pageTotal,prevSet:"|<" ,nextSet:">|"}}
                        className="pagination is-centered"
                        onPageChanged={this.handlePageChanged}
                    />
                </div>              
            </div>
        );
    }
};

export default List;


const TableTr = (props) => {
    let date = new Date();
    let articleModel = props.articleModel;
    date.setTime(articleModel.time);
    return (
            <tr>
            <td>
                <Link to="/Admin/Detail" to={{
                    pathname: '/Admin/Detail',
                    state: { articleModel: articleModel }
                }} >
                    {articleModel.title}
                </Link>
            </td>
            <td>
                    {date.toLocaleDateString()}
                    {/* {articleModel.time} */}
            </td>
            <td>
                {articleModel.view}
            </td>
            <td>
                {articleModel.tag}
            </td>
            <td>
                <Link to="/admin/editor" 
                to={{
                    pathname: '/admin/editor',
                    state: { articleModel: articleModel }
                }}>
                    编辑
                </Link>
                &nbsp;&nbsp;
                <Link to="#" onClick={props.onClick}>
                    删除
                </Link>
            </td>
            </tr>
        )
}
