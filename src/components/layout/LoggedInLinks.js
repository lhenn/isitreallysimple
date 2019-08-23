import React from 'react';
import {NavLink} from 'react-router-dom';

const LoggedInLinks = () => {
  return (
    <ul className="right">
      <li><a className="black-text">Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating white black-text'>LH</NavLink></li>
    </ul>
  )
}

export default LoggedInLinks;
