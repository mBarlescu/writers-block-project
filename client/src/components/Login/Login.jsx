import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { UncontrolledAlert } from 'reactstrap';
import "./Login.css";
import axios from 'axios';
import {Container} from 'reactstrap';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      redirect: false,
      visible: false,
      session: false,
      email: '',
      password:''
      
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  
    axios.get(`http://localhost:3000/api/sessions`)
    .then(res => {
      console.log("Session", res.data)
      this.setRedirect();
       
    })
    .catch(err => {
       console.log('Error', err)
    }) 
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let thisComponent = this;
    let email = this.state.email;
    let password = this.state.password;
    
  
    axios.post(`http://localhost:3000/api/login`, { email, password})
    .then(function (response) {
      console.log("Response ", response);
      thisComponent.setRedirect();
    })
    .catch(function (error) {
      console.log("Error ", error);
      thisComponent.setState({password: ''});
      thisComponent.setState({visible: true});

    });

  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  
  render() {
    return (

      <div>
        {this.renderRedirect()}
        <div className="pb-2 mt-4 mb-2 border-bottom">
              <h3>Login</h3>
        </div>
        <UncontrolledAlert color="danger" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
          The email address or password is incorrect.
        </UncontrolledAlert>
        <div className="Login">
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.state.email}
                      onChange={this.handleEmail}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handlePassword}
                      type="password"
                    />
                  </FormGroup>
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
        </div>
      </div>
    );
  }

}



export default Login;