import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReviewDetails from "./ReviewDetails"
import { Container, Accordion, Card, Button, Form, Col, Row } from "react-bootstrap"
import CreateReview from './reviews/CreateReview'

const RecipeDetails = ({recipe, recipeID}) => {

  if (recipe) {
    return (
      <Container>
        <h3>{recipe.title}</h3>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Write your review >
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <CreateReview recipe={recipe} recipeID={recipeID}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {recipe.reviews.map(review => {
          return <ReviewDetails key={review.authorID} review={review} />;
        })}
      </Container>
    );
  } else {
    return (
      <Container>
        <p>Loading recipe..</p>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null;
  return {
    recipe: recipe,
    recipeID: id
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "recipes" }])
)(RecipeDetails);
