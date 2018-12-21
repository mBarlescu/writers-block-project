import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {


    return (
      <div className='col-5 my-col'>
        <div className='header row'>
          <div className='col-5 my-col-img'>
            <img className='img-cover' src={props.user.image} />
          </div>
          <div className='col-7 my-col-description'>
            <NavLink className='author' to="/">{props.user.first_name} {props.user.last_name}</NavLink>
            <br />
            <span className='description'>
              {props.user.description}
            </span>

          </div>
        </div>
      </div>
    );
  }


export default User;