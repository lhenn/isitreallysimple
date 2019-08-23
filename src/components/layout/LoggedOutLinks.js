import React from 'react';
import {NavLink} from 'react-router-dom';

const LoggedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/signup' className='black-text'>Sign Up</NavLink></li>
      <li><NavLink to='/login' className='black-text'>Log In</NavLink></li>
    </ul>
  )

}

export default LoggedOutLinks;
