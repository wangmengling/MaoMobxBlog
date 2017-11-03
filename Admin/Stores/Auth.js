import { observable, computed } from 'mobx';
import Apis from '../Apis';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'MaoMboxBlog'; // 指定密钥，这是之后用来判断 token 合法性的标志
class Auth {
    @observable user = null;

    @computed get isLoggedIn() {
        console.log(this.user);
        return !!this.user;
    }

    constructor(){
        // const token = localStorage.getItem('token');
        this.user = localStorage.getItem('user');
    }

    logout() {
        localStorage.removeItem('token');
    }
} 
export default Auth;