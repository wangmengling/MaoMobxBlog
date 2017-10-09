import { observable } from 'mobx';
import ajax from '../Apis'; //经过封装的加强型 ajax 函数

class HomeState {
  @observable content = "Welcome My World !";
  @observable articleList = new Array(0);
  constructor() {
    
  }

  changeContent() {
    this.content = "My Name Is WangGuoZhong!";
    console.log(this.content);
  }
}

export default HomeState;