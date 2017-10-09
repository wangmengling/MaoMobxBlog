import { observable, computed } from 'mobx';
import Apis from '../Apis';
import jwt from 'jsonwebtoken';

class Auth {
    @observable user = null;

    @computed get isLoggedIn() {
        return !!this.user;
    }

    constructor(){
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            this.user = jwt.verify(token, JWT_SECRET);
        }
    }

    login(username, password) {
        //发送摘苹果请求
        ajax({
            url: '/api/v1/user/login',
            method: 'POST',
            data:{
                username: username,
                password: password
            }
        }).then(function (response) {
            this.user = response.data;
            console.log(response.data);
            // localStorage.setItem('token', res.data.token);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    logout() {
        // Storage.remove('token');
        localStorage.removeItem('token');
        return get('/api/auth/logout');
    }
} 
export default Auth;