import React, {Component} from 'react'
import RecipeFilter from './RecipeFilter'
import RecipeList from './RecipeList'
import {Container} from 'react-bootstrap'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { compose } from 'redux'
import {connect} from 'react-redux'
import SearchRecipe from './SearchRecipe'
import {Row, Col} from 'react-bootstrap'



class Recipes extends Component {
  state = {
    mealType:'',
    sortBySimple:'',
    sortByTaste:''
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
    if(this.state.mealType !== '')
      return recipes.filter(recipe => recipe.mealType === this.state.mealType)
    return recipes
  }

  handleNoResults = () => {
    this.setState({
      filteredRecipes: []
    })
  }
 
  render() {
    
    const recipeList = !isLoaded(this.props.recipes)
      ? 'Loading'
      : isEmpty(this.filterRecipes(this.props.recipes))
        ? 'No results found' 
        : <RecipeList recipes={this.filterRecipes(this.props.recipes)}/>

    return (
      <Container>
        <h2>Browse Recipes</h2>
        <RecipeFilter/>
        {recipeList}
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

