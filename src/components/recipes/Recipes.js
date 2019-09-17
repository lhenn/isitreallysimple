import React, {Component} from 'react'
import RecipeFilter from './RecipeFilter'
import RecipeList from './RecipeList'
import {Container} from 'react-bootstrap'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { compose } from 'redux'
import {connect} from 'react-redux'
import SearchRecipe from './SearchRecipe'
import {Accordion, Button, Card} from 'react-bootstrap'



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
    return recipes.filter(recipe => recipe.mealType === this.state.mealType)
  }

  handleNoResults = () => {
    this.setState({
      filteredRecipes: []
    })
  }
 
  render() {
    
    const recipeList = !isLoaded(this.props.recipes)
      ? 'Loading'
      : isEmpty(this.props.recipes)
        ? 'No results found' 
        : <RecipeList recipes={this.filterRecipes(this.props.recipes)}/>

    return (
      <Container>
        <h2>Recipe Reviews</h2>
        <SearchRecipe onNoResults={this.handleNoResults}/>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Filter recipes >
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <RecipeFilter onChangeFilterData={this.handleChangeFilterData} onSubmit={this.handleSubmit}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
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

