import React from 'react'
import RecipeFilter from './RecipeFilter'
import RecipeList from './RecipeList'
import {Container} from 'react-bootstrap'

const Recipes = () => {

  return (
    <Container>
      <h2>Recipe Reviews</h2>
      <RecipeFilter/>
      <RecipeList/>
    </Container>
  )
}

export default Recipes;
