import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class User extends Component {
  constructor(props){
  super(props);


  }

  componentDidMount() {

  }

  render(){


    return (
      <div className='col-5 my-col'>
        <div className='header row'>
          <div className='col-5 my-col-img'>
            <img className='img-cover' src={this.props.user.image} />
          </div>
          <div className='col-7 my-col-description'>
            <NavLink className='author' to="/">{this.props.user.first_name} {this.props.user.last_name}</NavLink>
            <br />
            <span className='description'>
              {this.props.user.description}
            </span>

          </div>
        </div>
      </div>
    );
  }
}


export default User;