import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'
import { Nav, NavDropdown} from 'react-bootstrap'



const LoggedInLinks = ({profile, logOut}) => {

  return (
    <Nav>
      
      <NavDropdown title={profile.username}>
        <NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}


export default connect(null, mapDispatchToProps)(LoggedInLinks);
