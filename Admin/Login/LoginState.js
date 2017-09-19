import { observable } from 'mobx';
import ajax from '../Apis'; //经过封装的加强型 ajax 函数

class LoginState {
  @observable content = "Welcome My World !";
  constructor() {
    
  }

  changeContent() {
    this.content = "My Name Is WangGuoZhong!";
  }
}

export default LoginState;