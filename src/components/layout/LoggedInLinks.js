import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'
import {Navbar, Nav, Button, OverlayTrigger, Popover} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

const popover = (
  <Popover id="popover-basic">
   <Popover.Content>
     <Button variant="outline-dark" onClick={logOut}>Logout</Button>
   </Popover.Content>
 </Popover>
)

const LoggedInLinks = ({profile, logOut}) => {
  return (
  
    <Nav>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popover}
      >
          <Button
            inline="true"
            className="mr-sm-2"
          >
            <FontAwesomeIcon icon={faStroopwafel} />
            <div className="profile-container">{profile.username}</div>
          </Button>
      </OverlayTrigger>
    </Nav>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}


export default connect(null, mapDispatchToProps)(LoggedInLinks);
