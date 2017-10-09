import { observable ,action,useStrict} from 'mobx';
import ajax from '../Apis'; //经过封装的加强型 ajax 函数
useStrict(true);
class LoginStore {
  @observable content = "Welcome My World !";
  constructor() {
    
  }

  @action  login(userName,passWord) {
    //发送摘苹果请求
    ajax({
        url: '/api/v1/user/login',
        method: 'POST',
        data:{
          username: userName,
          password: passWord
        }
    }).then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default LoginStore;