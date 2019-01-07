import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';




class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      currenteUser:{props}
      
    };  
    
    this.props.validateUserSession();

    this.renderNameAndLogoutLink = this.renderNameAndLogoutLink.bind(this);
    this.logout = this.logout.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderCreate = this.renderCreate.bind(this);
    this.renderDrafts = this.renderDrafts.bind(this);
    this.pathDrafts = this.pathDrafts.bind(this);

    
  }

  pathDrafts() {
    
  }

  renderNameAndLogoutLink() {
    if(this.props.currentUser.firstName){
      return(
        <ul className='navbar-nav ' style={{position: 'absolute', right: 0}}>
        <span className="navbar-text" >
          Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}
        </span>
        <NavLink className='nav-link' to="/" onClick = {this.logout}>Logout</NavLink>
        </ul>
      );
    }
  }

  renderCreate(){
    if(this.props.currentUser.firstName){
      return(
        <li className='nav-item'>
          <NavLink className='nav-link' to="/stories/new">Create</NavLink>
        </li>
      );
    }
  }

  renderDrafts(){
    if(this.props.currentUser.firstName){
      return(
        <li className='nav-item'>
          <NavLink className='nav-link' to="/">My drafts</NavLink>
        </li>
      );
    }
  }

  renderLogin() {
    if(!this.props.currentUser.firstName){
      return(
        <ul className='navbar-nav ' style={{position: 'absolute', right: 0}}>
          <NavLink className='nav-link' to="/login">Login</NavLink>
        </ul>
      );
    }
  }

  logout() {
    let thisComponent = this;
    axios.delete(`http://localhost:3000/api/logout`)
    .then(function (response) {
      console.log("Response logout", response);
      thisComponent.props.validateUserSession();
    })
    .catch(function (error) {
      console.log("Error logout", error);

    });

  }




  render() {

    return(

        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <NavLink className='navbar-brand' to="/">Writer's Block</NavLink>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to="/users">Authors</NavLink>
              </li>
              {this.renderCreate()}
      
            </ul>
           
            {this.renderNameAndLogoutLink()}
            {this.renderLogin()}
              
            
        </nav>

    )
  }
}

export default NavBar;