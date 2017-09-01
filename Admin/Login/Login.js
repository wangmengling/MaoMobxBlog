import React,{Component} from 'react'

import './Login.scss'
// class App extends Component 
class Login extends  Component {
    render() {
        return(
            <div className="LoginScss">
            <div className="Login">
                <link rel="stylesheet" type="text/css" href="../dist/css/is-awesome.css" />
                <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
                <div className="columns">
                <div className="column is-4 is-offset-4">
                    <div className="box-login">
                        <h1 className="title has-text-centered">Blog Admin</h1>
                        <div className="box">
                            <h2 className="subtitle has-text-centered">Login In</h2>
                            <div className="columns">
                              <div className="column is-12">
                                    <p className="control has-icon has-icon-right">
                                        <input className="input" type="text" placeholder="Email" />
                                        <span className="icon is-small">
                                            <i className="fa fa-envelope-o"></i>
                                        </span>
                                    </p>
                              </div>
                          </div>
                          <div className="columns">
                              <div className="column is-12">
                                  <p className="control has-icon has-icon-right">
                                    <input className="input" type="password" placeholder="Password" />
                                    <span className="icon is-small">
                                        <i className="fa fa-key"></i>
                                    </span>
                                  </p>
                              </div>
                          </div>
                          <div className="columns is-mobile">
                              <div className="column is-6">
                                  <p className="control">
                                    <label className="checkbox">
                                      <input type="checkbox" className="CheckBoxInput"/>
                                      Remember me
                                    </label>
                                  </p>
                              </div>
                              <div className="column is-6">
                                  <p className="control is-pulled-right">
                                        <button className="button is-primary">Submit</button>
                                    </p>
                              </div>
                          </div>
                            <hr/>
                           
                          <br/>
                          <div className="columns">
                              <div className="column is-10">
                                  <a>Forgot password</a>
                              </div>
                              <div className="column is-2 corner-github">
                                    <span className="corner-icon">
                                        <a href="https://github.com/ettorej/ettorej.github.io"><i className="fa fa-github"></i></a>
                                    </span>
                                </div>
                          </div>
                      </div>
  
                  </div>
                </div>
                
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.js"></script>
	  	<script src='../plugins/kissui.scrollanim/build/scrollanim.js'></script>
            </div>
            </div>
        );
    }
};

export default Login;
