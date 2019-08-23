import React from 'react'
import { Link } from 'react-router-dom'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import { connect } from 'react-redux'



const Navbar = ({profile, auth}) => {
  const links = auth.uid ? <LoggedInLinks profile={profile}/> : <LoggedOutLinks/>;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light lh-nav">
        <Link to='/' className='navbar-brand'>Is it <span>really</span> simple?</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        { links }
        </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
