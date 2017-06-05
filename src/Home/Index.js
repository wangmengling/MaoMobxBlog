import React, { Component } from 'react';
import HomeState from './HomeState';
import Home from './Home';
import ajax from '../Apis'; //经过封装的加强型 ajax 函数

const homeState = new HomeState();
//发送摘苹果请求
        ajax({
            url: '/api/v1/article/getList',
            method: 'GET'
        }).then(function (response) {
          console.log(response.data);
          
          homeState.articleList = response.data;
          console.log(homeState.articleList);
        })
        .catch(function (error) {
          console.log(error);
        });

export default  () => (
    <Home homeState={homeState} />
)