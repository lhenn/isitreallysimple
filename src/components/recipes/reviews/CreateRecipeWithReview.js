import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createRecipeWithReview } from "../../../store/actions/recipeActions";
import { Redirect } from "react-router-dom";
import CreateReviewFormGroups from './CreateReviewFormGroups'

class CreateRecipeWithReview extends Component {
  state = {
    title: "",
    simpleCategories: [],
    mealType: "",
    simpleRating: "",
    tasteRating: null,
    comments: ""
  };
  componentDidMount() {
    this.setState({
      title:this.props.title
    })
  }
  handleChange = e => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleCheckChange = e => {
    let arr = [...this.state.simpleCategories];

    if (arr.includes(e.target.value))
      arr.splice(arr.indexOf(e.target.value), 1);
    else arr.push(e.target.value);

    this.setState({
      simpleCategories: arr
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onReviewSubmit(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    const mealTypes = require("../RecipeData").mealTypes;
    const simpleCategories = require("../RecipeData").simpleCategories;
    console.log("auth", auth);

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <h5 as={Col}>Recipe Details</h5>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Recipe Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={this.handleChange}
                value={this.props.title}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Meal Type</Form.Label>
              <Form.Control
                as="select"
                name="mealType"
                onChange={this.handleChange}
                required
              >
                {mealTypes.map(m => {
                  return (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Simple Categories
            </Form.Label>
            <Col sm={10}>
              {simpleCategories.map(c => {
                return (
                  <Form.Check
                    key={c}
                    inline
                    label={c}
                    type="checkbox"
                    name="simpleCategory"
                    value={c}
                    onClick={this.handleCheckChange}
                  />
                );
              })}
            </Col>
          </Form.Group>

          <Form.Row>
            <h5 as={Col}>Your Review</h5>
          </Form.Row>
          <CreateReviewFormGroups onChange={this.handleChange}/>
          <Button variant="primary" type="submit">
            Post Review
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRecipeWithReview: recipe => dispatch(createRecipeWithReview(recipe))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRecipeWithReview);
