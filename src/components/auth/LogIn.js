import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { logIn } from '../../store/actions/authActions'
import {InputGroup, FormControl} from 'react-bootstrap'

class LogIn extends Component {
  state = {
    email:'',
    password:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
  }
  render() {
    console.log(this.state);
    if(this.props.auth.uid) return <Redirect to='/' />
    return(
      <div className='container'>
        <h4>Log in</h4>
        <form onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              onChange={this.handleChange}
              />
          </InputGroup>
          <InputGroup className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </InputGroup>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => dispatch(logIn(credentials))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
