import React, { Component } from 'react';
import axios from 'axios';
import {Container} from 'reactstrap';


class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '',
      password:''
     }
  }


  handleEmail(text) {
    this.setState({email:text.target.value})
  }

  handlePassword(text) {
    this.setState({password:text.target.value})
  }

  login() {
    let obj={}
    obj.email = this.state.email;
    obj.password = this.state.password;

    axios.post(`http://localhost:3000/api/login`, { obj })
    .then(res => {
      console.log('CONTENT2', res);
      console.log('CONTENT', res.data);
    })

  };
  
  
  render() {
      return (
      <div>
        <input type="text" placeholder="Enter Email" onChange={(text) => {this.handleEmail(text)}} />
        <br />
        <input type="password" placeholder="Enter Password" onChange={(text) => {this.handlePassword(text)}} />
        <br />
        <button>Login</button>
      </div>
    );
  }

}



export default Login;