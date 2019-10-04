import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReviewDetails from "./ReviewDetails"
import { Container, Row, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import RecipeInfo from './summary/RecipeInfo'
import ReviewInfo from './summary/ReviewInfo'
import ReviewModal from './reviews/ReviewModal'


const RecipeDetails = ({recipe, recipeID}) => {

  if (recipe) {
    return (
      <Container>

        <h3 className="recipe-title details">{recipe.title}</h3>
        <div as={Row} className='recipe-summary-container details'>
          <RecipeInfo recipe={recipe}/>
          <ReviewInfo recipe={recipe}/>
        </div>

      <Row className="recipe-details-button-container">
      <Button as={Link} variant="light" id="back-to-recipes-button" to='/'>Back to recipes</Button>
      <ReviewModal recipe={recipe} recipeID={recipeID}/>
      </Row>
     

{recipe.reviews.map((review, index) => {
  return <ReviewDetails key={index} review={review} />;
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
