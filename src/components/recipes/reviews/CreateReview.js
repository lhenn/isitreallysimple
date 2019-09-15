import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createReview } from "../../../store/actions/recipeActions";
import { Redirect } from "react-router-dom";

class CreateReview extends Component {
  state = {
    simpleRating: "",
    tasteRating: null,
    comments: "",
    recipeID: null
  };
  componentDidMount() {
    this.setState({
      recipeID: this.props.recipeID
    });
  }
  handleChange = e => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createReview(this.state);

  };
  render() {
    console.log(this.state);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    const mealTypes = require("../RecipeData").mealTypes;
    const simpleCategories = require("../RecipeData").simpleCategories;
    const simpleRatings = require("../RecipeData").simpleRatings;
    const tasteRatings = require("../RecipeData").tasteRatings;
    console.log("auth", auth);

    return (
      <Form onSubmit={this.handleSubmit}>
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
    createReview: review => dispatch(createReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReview);
