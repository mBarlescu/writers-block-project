import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import '../../styles/NavBar.css'




class NavBar extends Component {

  constructor(props) {
    super(props);


    this.state = {
      currenteUser:{props},
      listGenres: []

    };
    console.log('PROPS ON NAVBAR', this.props)
    console.log('STATE ON NAVBAR', this.state)
    this.props.validateUserSession();

    this.renderNameAndLogoutLink = this.renderNameAndLogoutLink.bind(this);
    this.logout = this.logout.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderCreate = this.renderCreate.bind(this);
    this.renderDrafts = this.renderDrafts.bind(this);
    this.renderGenres = this.renderGenres.bind(this);
    this.setGenres = this.setGenres.bind(this);
    this.navLinkToFindByGenre = this.navLinkToFindByGenre.bind(this);

    axios.get(`http://localhost:3000/api/genres`)
    .then( (response) => {
      console.log("Response Genres ", response.data);
      this.setGenres(response.data)
    })
    .catch(function (error) {
      console.log("Error ", error);
    });


  }

  setGenres(list) {
    this.setState({listGenres: list})
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
        <NavLink className='nav-link' to={this.navLinkToDrafts()}> MyWorks</NavLink>
      </li>
      );
    }
  }

  renderGenres(){
    return(
      <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/">Link</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

    );
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

   navLinkToDrafts() {
  return `/users/${this.props.currentUser.id}/drafts`
}

navLinkToFindByGenre(id) {
  return `/genres/${id}`
}




  render() {

    const genre = this.state.listGenres.map((item, index) => {
      console.log("Entrou K")
      return (
        <DropdownItem key={item.id}>
          <NavLink  value={item.id} to={this.navLinkToFindByGenre(item.id)}>{item.name}</NavLink>
        </DropdownItem>
      );
    });


    return(

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <NavLink className='navbar-brand' to="/">Writer's Block</NavLink>
            <ul className='navbar-nav'>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Find by Genre
                </DropdownToggle>
                <DropdownMenu right>
                  {genre}
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className='nav-item'>
                <NavLink className='nav-link' to="/users">Authors</NavLink>
              </li>
              {this.renderDrafts()}
              {this.renderCreate()}
            </ul>

            {this.renderNameAndLogoutLink()}
            {this.renderLogin()}


        </nav>

    )
  }
}

export default NavBar;