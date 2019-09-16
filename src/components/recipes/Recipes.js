import React, {Component} from 'react'
import RecipeFilter from './RecipeFilter'
import RecipeList from './RecipeList'
import {Container} from 'react-bootstrap'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {connect} from 'react-redux'
import SearchRecipe from './SearchRecipe'
import {Accordion, Button, Card} from 'react-bootstrap'



class Recipes extends Component {
  state = {
    selectedMealType:'',
    sortBySimple:'',
    sortByTaste:'',
    filteredRecipes:[]
  }
  componentDidMount() {
    console.log(this.props.recipes)
    this.setState({
      filteredRecipes: this.props.recipes
    });
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

  handleNoResults = () => {
    this.setState({
      filteredRecipes: []
    })
  }
 
  render() {
    
    //const recipes = this.state.filteredRecipes.length != 0 ? this.state.filteredRecipes : this.props.recipes;

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
        <RecipeList recipes={this.props.recipes}/>
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

