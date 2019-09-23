import React, { Component } from "react"
import { Form, Col, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import CreateReviewFormGroups from './CreateReviewFormGroups'


class CreateReview extends Component {
  state = {
    simpleRating: "",
    tasteRating: null,
    comments: ""
  };

  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onReviewSubmit(this.state);
  };
  render() {
    console.log(this.state);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <Form onSubmit={this.handleSubmit}>
        <CreateReviewFormGroups onChange={this.handleChange} />
        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps) (CreateReview);
