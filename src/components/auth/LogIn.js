import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { logIn } from '../../store/actions/authActions'
import {Form, FormControl, InputGroup, Button} from 'react-bootstrap'

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
    if(this.props.auth.uid) return <Redirect to='/'/>
    return(
      <div className='container'>
        <h4>Log in</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
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
