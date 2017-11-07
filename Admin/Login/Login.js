import React,{ Component } from 'react';
import { string, object } from 'prop-types'
import {observer} from 'mobx-react';
import './Login.scss';
import { browserHistory ,hashHistory,withRouter,history} from 'react-router-dom'
@observer
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: ""
        }
        this.changeUsername = this.changeUsername.bind(this);
    }

    componentWillMount(){
        let AUTH_TOKEN = localStorage.getItem('token');
        if (AUTH_TOKEN) {
            this.props.history.push('/admin');
        }
    }
    //监听input中的数据，保存到state中
    changeUsername(e){
        let uname = e.target.value;
        this.setState({
            userName: uname
        });
    }
    changePassword(e){
        let upwd = e.target.value;
        this.setState({
            userPassword: upwd
        })
    }
    //是否记住密码
    handleCheckbox(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({
                isRemember: true
            })
        }else{
            this.setState({
                isRemember: false
            })
        }
    }

    //点击登录按钮，触发后台接口提供的验证，对数据的处理等方法
    handleClick(){
        if(this.state.userName === ""||this.state.userName === null){
            this.setState({
                unameHelp: "用户名不能为空"
            })
        }else if(this.state.userPassword === ""||this.state.userPassword === null){
            this.setState({
                unameHelp: "",
                upwdHelp: "密码不能为空"
            })
        }else{
            this.setState({ //清除help-block提示文字
                unameHelp: "",
                upwdHelp: ""
            });
   
            if(this.state.isRemember === true){ //是否记住密码，若记住，则保存至localstorage，反之，清除
                // let loginData = {this.state.userName,this.state.userPassword};
                let loginData = {};
                loginData.userName = this.state.userName;
                loginData.userPassword = this.state.userPassword;
                // Data.localSetItem("mm_loginStatus",loginData);
                // localStorage.setItem("userName",this.state.userName);
                localStorage.setItem("loginRemember",loginData);
            }else{
                // localStorage.removeItem("userName");
                // Data.localRemoveItem("jiaj-loginStatus");
            }
            this.props.store.login(this.state.userName,this.state.userPassword)
            .then((response) => {
                if(this.props.store.isLoginIn){
                    this.props.history.push('/admin');
                }
            }).catch((error) => {
                
            });
        }
    }
    render(){

        return (
            <div className="Login">
            <div className="LoginImage">
            </div>
            <div className="LoginContent">
                <div className="LoginTitle">Blog管理系统</div>
                <div className="LoginForm">
                    <form action="" className="FormHorizontal">
                        <div className="FormGroup InputText">
                            <label htmlFor="uname">账号:</label>
                            <input type="text" className="form-control" name="username" id="uname" ref="uname" placeholder="手机号/用户名"
                                onChange={this.changeUsername}/>
                            <span className="help-block">{this.state.unameHelp}</span>
                        </div>

                        <div className="FormGroup InputText">
                            <label htmlFor="upwd">密码:</label>
                            <input type="password" className="form-control" name="password" id="upwd" ref="upwd" placeholder="密码"
                                onChange={this.changePassword.bind(this)}/>
                            <span className="help-block">{this.state.upwdHelp}</span>
                        </div>

                        <div className="FormGroup Remember">
                            <label htmlFor="chk" className="check">
                                <input type="checkbox" id="chk" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)} />
                                <span>记住密码</span>
                            </label>
                        </div>

                        <div className="FormGroup">
                            <button type="button" onClick={this.handleClick.bind(this,this.state.userName,this.state.userPassword)} className="btn btn-primary login-btn">登录</button>
                        </div>
                    </form>
                </div>
                
            </div>
            </div>
        )
    }
}

export default withRouter(Login);