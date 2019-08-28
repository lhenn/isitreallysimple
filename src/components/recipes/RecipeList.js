import React from 'react'
import RecipeSummary from './RecipeSummary'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Link} from 'react-router-dom'



const RecipeList = ({recipes}) => {
  console.log(recipes);
  return(
    <div>
      {recipes && recipes.map(recipe => {
        return (
          <div key={recipe.id}>
            <Link to={'/recipe/' + recipe.id}>
              <RecipeSummary recipe={recipe}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
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
)(RecipeList);
