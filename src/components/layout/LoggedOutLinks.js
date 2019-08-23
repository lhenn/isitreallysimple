import React from 'react';
import {NavLink} from 'react-router-dom';

const LoggedOutLinks = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink to='/about' className="nav-link">About</NavLink></li>
      <li className="nav-item"><NavLink to='/login' className="nav-link">Log In</NavLink></li>
      <li className="nav-item"><NavLink to='/signup' className="nav-link">Sign Up</NavLink></li>
    </ul>
  )

}

export default LoggedOutLinks;
