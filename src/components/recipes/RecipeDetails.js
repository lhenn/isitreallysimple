import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const RecipeDetails = (props) => {
  const { recipe } = props;
  if (recipe) {
    console.log(props.recipe);
    return (
      <div>
        <h3>{ recipe.title }</h3>

      </div>
    )
  } else {
    return (
      <div className="container-center">
        <p>Loading recipe..</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null;
  return {
    recipe: recipe
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(RecipeDetails)
