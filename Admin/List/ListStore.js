import { observable ,action} from 'mobx';

import ajax from '../Apis'; //经过封装的加强型 ajax 函数

class ListStore {
  @observable content = "Welcome My World !";
  @observable articleList = new Array(0);
  @observable pageIndex = 0;
  @observable pageSize = 10;
  @observable pageTotal = 0;
  @observable deleteData = null;
  constructor() {
    
  }

  changeContent() {
    this.content = "My Name Is WangGuoZhong!";
  }

  @action  getArticleList(pageIndex) {
    // this.pageIndex = pageIndex;
    //发送摘苹果请求
    const token = localStorage.getItem('token');
    ajax({
        url: '/api/v1/article/getList',
        method: 'POST',
        data:{
          token: token,
          pageIndex: pageIndex,
          pageSize: 10
        }
    }).then((response) => {
        this.pageIndex = pageIndex;
        this.articleList = response.data.data.list;
        this.pageTotal = response.data.data.pageTotal;
    })
    .catch((error) => {
       
    });
  }

  @action  deleteArticle(id) {
    // this.pageIndex = pageIndex;
    //发送摘苹果请求
    const token = localStorage.getItem('token');
    ajax({
        url: '/api/v1/article/deleteArticle',
        method: 'POST',
        data:{
          token: token,
          articleId:id
        }
    }).then((response) => {
        this.deleteData = response.data;
        console.log("-----")
        console.log(response.data);
        console.log("=====")
    })
    .catch((error) => {
       
    });
  }


}

export default  ListStore;