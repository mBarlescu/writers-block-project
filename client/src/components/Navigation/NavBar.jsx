import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(

    <div className = 'navbar navbar-default navbar-fixed-top'>
      <div className = 'container'>
        <NavLink to="/" className='navbar-brand'>Writers Block</NavLink>
        <div className='collapse navbar-collapse navHeaderCollapse'>
          <ul className='nav navbar-nav navbar-right'>
            <li> <NavLink to="/">Home</NavLink> </li>

          </ul>

        </div>
      </div>
    </div>
  )
}

export default NavBar;