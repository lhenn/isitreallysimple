import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper yellow">
      <div className="container">
        <Link to='/' className='brand-logo black-text'>Is it <span>really</span> simple?</Link>
        <LoggedInLinks />
        <LoggedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar;
