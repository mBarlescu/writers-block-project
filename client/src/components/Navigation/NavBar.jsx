import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(

      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink className='navbar-brand' to="/">Writer's Block</NavLink>




          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to="/users">Users</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="/stories">Stories</NavLink>
            </li>
          </ul>

      </nav>

  )
}

export default NavBar;