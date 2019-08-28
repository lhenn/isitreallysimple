import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { signUp } from '../../store/actions/authActions'
import {Form, FormControl, InputGroup, Button, Alert} from 'react-bootstrap'

class SignUp extends Component {
  state = {
    username:'',
    email:'',
    password:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return(
      <div className='container'>
        <h4>Sign Up!</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" onChange={this.handleChange} />
            <Form.Text className='text-muted'>What will appear when you post.</Form.Text>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={this.handleChange} />
            <Form.Text className='text-muted'>What you will use to sign in.</Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
            <Form.Text className='text-muted'>6 or more characters, please.</Form.Text>
          </Form.Group>
          <div>
            {authError ? <Alert variant='danger'>{ authError }</Alert>: null }
          </div>
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
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
