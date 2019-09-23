import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReviewDetails from "./ReviewDetails"
import { Container, Accordion, Card, Button, Form, Col, Row } from "react-bootstrap"
import CreateReview from './reviews/CreateReview'
import RecipeInfo from './summary/RecipeInfo'
import ReviewInfo from './summary/ReviewInfo'
import SimpleRatings from './summary/SimpleRatings'
import TasteRatings from './summary/TasteRatings'
import ReviewModal from './reviews/ReviewModal'


const RecipeDetails = ({recipe, recipeID}) => {

  if (recipe) {
    return (
      <Container>

        <h3 className="recipe-title details">{recipe.title}</h3>
        <div className='recipe-summary-container details'>
          <RecipeInfo recipe={recipe}/>
          <ReviewInfo recipe={recipe}/>
        </div>

      <ReviewModal recipe={recipe} recipeID={recipeID}/>
       
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
