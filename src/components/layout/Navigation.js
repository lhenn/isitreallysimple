import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import { connect } from 'react-redux'
import {Navbar, Nav} from 'react-bootstrap'



const Navigation = ({profile, auth}) => {
  const links = auth.uid ? <LoggedInLinks profile={profile}/> : <LoggedOutLinks/>;
  return (
    <Navbar bg="primary" expand="md" className="text-body">
        <Navbar.Brand as={Link} to='/' className="text-body">Is it <span className="italic bold">really</span> simple?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to='/about' className="text-body">About</Nav.Link>
          <Nav.Link as={NavLink} to="/reviewRecipe" className="text-body">Review a recipe</Nav.Link>
        </Nav>
        {links}
        </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navigation);
