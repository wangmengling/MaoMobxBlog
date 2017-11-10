import React,{ Component } from 'react';
import { observable ,action,useStrict} from 'mobx';

import ajax from '../Apis'; //经过封装的加强型 ajax 函数
import Auth from '../Stores/Auth.js'
class DetailStore {
  @observable articleModel = null;
  constructor() {
    
  }
}

export default DetailStore;