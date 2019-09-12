import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createRecipeWithReview } from "../../store/actions/recipeActions";
import { Redirect } from "react-router-dom";

class CreateRecipeWithReview extends Component {
  state = {
    title: "",
    simpleCategories: [],
    mealType: "",
    simpleRating: "",
    tasteRating: null,
    comments: ""
  };
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
    this.props.createRecipeWithReview(this.state);
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    const mealTypes = require("./RecipeData").mealTypes;
    const simpleCategories = require("./RecipeData").simpleCategories;
    const simpleRatings = require("./RecipeData").simpleRatings;
    const tasteRatings = require("./RecipeData").tasteRatings;
    console.log("auth", auth);

    return (
      <Container>
        <h4>Review a Recipe</h4>
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
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Meal Type</Form.Label>
              <Form.Control
                as="select"
                name="mealType"
                onChange={this.handleChange}
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
          <Form.Row>
            <Form.Group as={Col} sm={4}>
              <Form.Label>Was it really simple?</Form.Label>
              {simpleRatings.map(s => {
                return (
                  <Form.Check
                    key={s}
                    label={s}
                    type="radio"
                    name="simpleRating"
                    value={s}
                    onClick={this.handleChange}
                  />
                );
              })}
            </Form.Group>
            <Form.Group as={Col} sm={8}>
              <Form.Label>How did it taste on a scale of 1-5?</Form.Label>
              <Form.Control
                as="select"
                name="tasteRating"
                onChange={this.handleChange}
              >
                {tasteRatings.map(r => {
                  return (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="comments"
              onChange={this.handleChange}
            />
          </Form.Group>
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
