import React from 'react'
import {NavLink} from 'react-router-dom'
import {Nav} from 'react-bootstrap'

const LoggedOutLinks = () => {
  return (


    <Nav>
      <Nav.Link as={NavLink} to='/login' className="text-body">Log In</Nav.Link>
      <Nav.Link as={NavLink} to='/signup' className="text-body">Sign Up</Nav.Link>
    </Nav>
    
  )
}

export default LoggedOutLinks;
