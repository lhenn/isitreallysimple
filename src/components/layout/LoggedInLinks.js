import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'

const LoggedInLinks = ({profile, logOut}) => {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink to='/about' className="nav-link">About</NavLink></li>
      <li className="nav-item"><button className="nav-link btn" onClick={logOut}>Log Out</button></li>
      <li className="nav-item"><NavLink to='/' className="nav-link">{profile.username}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks);
