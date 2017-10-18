import { observable ,action} from 'mobx';
import ajax from '../Apis'; //经过封装的加强型 ajax 函数

class ListStore {
  @observable content = "Welcome My World !";
  @observable articleList = new Array(0);
  @observable pageIndex = 0;

  constructor() {
    
  }

  changeContent() {
    this.content = "My Name Is WangGuoZhong!";
  }

  @action  getArticleList() {
    //发送摘苹果请求
    const token = localStorage.getItem('token');
    ajax({
        url: '/api/v1/article/getList',
        method: 'POST',
        data:{
          token: token,
          pageIndex: this.pageIndex,
          num: 10
        }
    }).then((response) => {
       this.articleList = response.data;
    })
    .catch((error) => {
       
    });
  }
}

export default  ListStore;