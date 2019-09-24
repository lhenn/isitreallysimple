import React, { Component } from "react";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";
import { Container } from "react-bootstrap";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import SearchRecipe from "./SearchRecipe";
import { Row, Col } from "react-bootstrap";

class Recipes extends Component {
  state = {
    mealType: "",
    sortBy: "",
    title: ""
  };
  handleChange = (fieldType, fieldValue) => {
    this.setState({
      [fieldType]: fieldValue
    });
  };
  filterByTitle = recipes => {
    if (this.state.title !== "") {
      let titleInput = new RegExp(this.state.title, "i");
      return recipes.filter(recipe => titleInput.test(recipe.title));
    }
    return recipes;
  }
  sortRecipes = recipes => {
    if (this.state.sortBy === "tastiest") {
      return recipes.sort((a, b) => {
        return this.averageTasteRatings(b.reviews.map(r => parseInt(r.tasteRating))) -
          this.averageTasteRatings(a.reviews.map(r => parseInt(r.tasteRating)));
      });
    }
    if (this.state.sortBy === "simplest") {
      return recipes.sort((a, b) => {
        if (this.findProportionSimple(a) === this.findProportionSimple(b) ) {
          return b.reviews.length - a.reviews.length
        } 
        return this.findProportionSimple(b) - this.findProportionSimple(a)
        
      })
    }

    return recipes;
  };
  findProportionSimple = (recipe) => {
    return this.countSimpleRatings(recipe.reviews.map(r => r.simpleRating)).simple/ 
      (this.countSimpleRatings(recipe.reviews.map(r => r.simpleRating)).simple + this.countSimpleRatings(recipe.reviews.map(r => r.simpleRating)).notSimple)
  }
  averageTasteRatings = require("./RecipeData").averageTasteRatings;
  countSimpleRatings = require("./RecipeData").countSimpleRatings;

  render() {
    console.log(this.state);
    console.log(this.props.recipes);

    const recipeList = !isLoaded(this.props.recipes) ? (
      "Loading"
    ) : isEmpty(this.sortRecipes(this.filterByTitle(this.props.recipes))) ? (
      "No results found"
    ) : (
      <RecipeList recipes={this.sortRecipes(this.filterByTitle(this.props.recipes))} />
    );

    return (
      <Container>
        <h2>Browse Recipes</h2>
        <RecipeFilter onChange={this.handleChange} />
        {recipeList}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.firestore.ordered.recipes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "recipes" }])
)(Recipes);
