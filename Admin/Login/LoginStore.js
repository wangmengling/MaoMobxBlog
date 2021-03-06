import React,{ Component } from 'react';
import { observable ,action,useStrict} from 'mobx';
import {
  browserHistory,
  hashHistory
} from 'react-router'
import ajax from '../Apis'; //经过封装的加强型 ajax 函数
import Auth from '../Stores/Auth.js'
// useStrict(true);
class LoginStore {
  @observable tipMessage = "";
  @observable isLoginIn = false;
  constructor() {
    
  }

  @action  login(userName,passWord) {
    // this.isLoginIn = true;
    //发送摘苹果请求
    return ajax({
        url: '/api/v1/admin/user/login',
        method: 'POST',
        data:{
          username: userName,
          password: passWord
        }
    }).then((response) => {
      console.log(response);
      if(response.data.code == 1){
        localStorage.setItem('token',response.data.data.token);
        localStorage.setItem('user',response.data);
        this.isLoginIn = true;
      }
      this.tipMessage = response.data.msg;
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  }
}

export default LoginStore;