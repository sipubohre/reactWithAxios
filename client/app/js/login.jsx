import React from 'react';
import Config from 'Config'
import {Helmet} from "react-helmet";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Prompt, Switch} from 'react-router-dom'
var retry = true;


export default class login extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
      {
        'errortext':''
      };
    this.formsubmitHandler = this.formsubmitHandler.bind(this)
  }

  formsubmitHandler(event) {
    event.preventDefault();
    console.log("username and password", this.refs.username.value, this.refs.password.value)
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    this.loginhandler(username, password)
  }

  loginhandler(username, password) {
    const user = {
      username: username,
      password: password
    }
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>React basic setup</title>
          <meta name="description" content= "This is main page of basic setup of react using routing"/>
          <meta itemprop="name" content="React setup" />
          <meta itemprop="description" content="This is a project named React basic setup" />
        </Helmet>
        <div>
          <div className="container-fluid">
              <div className="row">
                  <div className="loginBg">
                      <form className="loginBox" onSubmit={this.formsubmitHandler}>
                          <div className="form-group">
                              <input type="text" className="form-control" placeholder="Username" ref="username"/>
                          </div>
                          <div className="form-group">
                              <input type="password" className="form-control" placeholder="Password" ref="password"/>
                          </div>
                          <div className="form-group">
                              <button type="submit" name="button" className="btn btn-primary form-control">Login</button>
                          </div>
                          <div className="form-group text-center">
                              <a href="#">Reset Password</a>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}