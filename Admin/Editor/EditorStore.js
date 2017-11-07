import React,{ Component } from 'react';
import { observable ,action,useStrict} from 'mobx';

import ajax from '../Apis'; //经过封装的加强型 ajax 函数
import Auth from '../Stores/Auth.js'
class EditorStore {
  @observable tipMessage = "";
  @observable statusCode = 0;
  constructor() {
    
  }

  @action  addContent(title,content) {
    //发送摘苹果请求
    ajax({
        url: '/api/v1/admin/article/add',
        method: 'POST',
        data:{
          title: title,
          content: content
        }
    }).then((response) => {
      console.log(response);
      this.statusCode = response.data.code;
      this.tipMessage = response.data.message;
    })
    .catch((error) => {
      console.log(error);
      this.statusCode = error.code;
      this.tipMessage = error.msg;
    });
  }
}

export default EditorStore;