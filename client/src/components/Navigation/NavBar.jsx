import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';




class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      currenteUser:{props}
      
    };  
    
    console.log("PROPS NAv", props.currentUser.id)

    
  }

  renderNameAndLogoutLink() {
    if(this.props.currentUser.firstName){
      return(
        <ul className='navbar-nav ' style={{position: 'absolute', right: 0}}>
        <span className="navbar-text" >
          Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}
        </span>
        <NavLink className='nav-link' tag={Link} to="/" onClick = {this.logout}>Logout</NavLink>
        </ul>
      );
    }
  }

 

  logout() {
    axios.delete(`http://localhost:3000/api/logout`)
    .then(function (response) {
      console.log("Response logout", response);
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
                <NavLink className='nav-link' to="/users">Users</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to="/stories">Stories</NavLink>
              </li>
            </ul>
           
            {this.renderNameAndLogoutLink()}
              
            
        </nav>

    )
  }
}

export default NavBar;