import React from 'react'
import {NavLink} from 'react-router-dom'
import {Nav} from 'react-bootstrap'

const LoggedOutLinks = () => {
  return (


    <Nav>
      <Nav.Link href='/login' className="text-body">Log In</Nav.Link>
      <Nav.Link href='/signup' className="text-body">Sign Up</Nav.Link>
    </Nav>
    
  )
}

export default LoggedOutLinks;
