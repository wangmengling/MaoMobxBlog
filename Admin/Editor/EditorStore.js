import React,{ Component } from 'react';
import { observable ,action,useStrict} from 'mobx';

import ajax from '../Apis'; //经过封装的加强型 ajax 函数
import Auth from '../Stores/Auth.js'
class EditorStore {
  @observable tipMessage = "";
  constructor() {
    
  }

  @action  addContent(title,content) {
    //发送摘苹果请求
    ajax({
        url: '/api/v1/user/login',
        method: 'POST',
        data:{
          title: title,
          content: content
        }
    }).then((response) => {
        
    })
    .catch((error) => {
        
    });
  }
}

export default EditorStore;