import React,{ Component } from 'react';
import { observable ,action,useStrict} from 'mobx';

import ajax from '../Apis'; //经过封装的加强型 ajax 函数
import Auth from '../Stores/Auth.js'
class EditorStore {
  @observable tipMessage = "";
  @observable statusCode = 0;
  @observable tagList = new Array(0);
  @observable categoryList = new Array(0);
  constructor() {
    
  }

  @action  addContent(data) {
    console.log(data);
    //发送摘苹果请求
    ajax({
        url: '/api/v1/admin/article/add',
        method: 'POST',
        data:data
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

  @action  getTagList() {
    //发送摘苹果请求
    ajax({
        url: '/api/v1/admin/tag/list',
        method: 'POST',
        data:{
          status: 1
        }
    }).then((response) => {
      console.log(response);
      this.tagList = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  @action  getCagegoryList() {
    //发送摘苹果请求
    ajax({
        url: '/api/v1/admin/category/list',
        method: 'POST',
        data:{
          status: 1
        }
    }).then((response) => {
      console.log(response);
      this.categoryList = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  @action  updateContent(data) {
    console.log(data);
    //发送摘苹果请求
    ajax({
        url: '/api/v1/admin/article/update',
        method: 'POST',
        data:data
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