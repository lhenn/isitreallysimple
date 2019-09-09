import React, {Component} from 'react'
import RecipeFilter from './RecipeFilter'
import RecipeList from './RecipeList'
import {Container} from 'react-bootstrap'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {connect} from 'react-redux'

class Recipes extends Component {

  state = {
    selectedMealType:'',
    sortBySimple:'',
    sortByTaste:'',
    filteredRecipes:[]
  }

  handleChangeFilterData = (fieldType, fieldValue) => {
    this.setState({
      [fieldType]:fieldValue
    })
  }

  handleSubmit = () => {
    this.setState({
      filteredRecipes: this.filterRecipes(this.props.recipes)
    })
  }

  filterRecipes = (recipes) => {
    return recipes.filter(recipe => recipe.mealType === this.state.selectedMealType)
  }
 
  render() {
    
    const recipes = this.state.filteredRecipes.length != 0 ? this.state.filteredRecipes : this.props.recipes;

    return (
      <Container>
        <h2>Recipe Reviews</h2>
        <RecipeFilter onChangeFilterData={this.handleChangeFilterData} onSubmit={this.handleSubmit}/>
        <RecipeList recipes={recipes}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Recipes);

