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
    console.log(title);
    console.log(content);
    //发送摘苹果请求
    ajax({
        url: '/api/v1/article/addArticle',
        method: 'POST',
        data:{
          title: title,
          content: content
        }
    }).then((response) => {
      console.log(response);
      this.statusCode = response.status;
      this.tipMessage = response.statusText;
    })
    .catch((error) => {
      this.statusCode = error.code;
      this.tipMessage = error.msg;
    });
  }
}

export default EditorStore;