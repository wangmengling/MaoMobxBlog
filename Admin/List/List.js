import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './List.scss'
class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            title:"asdfasd",
            htmlContent: `<h1>Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful</h1>
                      <p>Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.</p>`,
            markdownContent: "## HEAD 2 \n markdown examples \n ``` welcome ```",
            responseList: []
          }
          this.receiveHtml=this.receiveHtml.bind(this);
          this.onChangeTitle=this.onChangeTitle.bind(this);
   }
   receiveHtml(content) {
        this.setState({htmlContent: content});
   }
    onChangeTitle(e) {
        this.setState({title: e.target.value});
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
                        <th><abbr title="Position">ID</abbr></th>
                        <th>名字</th>
                        <th><abbr title="Played">日期</abbr></th>
                        <th><abbr title="Won">分类</abbr></th>
                        <th><abbr title="Drawn">阅读量</abbr></th>
                        <th><abbr title="Lost">付费</abbr></th>
                        <th><abbr title="Goals for">收藏</abbr></th>
                        <th><abbr title="Goals against">GA</abbr></th>
                        <th><abbr title="Goal difference">简介</abbr></th>
                        <th><abbr title="Points">标签</abbr></th>
                        <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>1</th>
                        <td>
                            <Link to="/Admin/Detail" >
                                艺术源自生活
                            </Link>
                        </td>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                        <td>3</td>
                        <td>68</td>
                        <td>36</td>
                        <td>+32</td>
                        <td>81</td>
                        <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                        </tr>
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