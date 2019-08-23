import React from 'react'
import RecipeSummary from './RecipeSummary'

const RecipeList = ({recipes}) => {
  console.log(recipes);
  return(
    <div className="section">
    <h2>Recipes</h2>
      {recipes && recipes.map(recipe => {
        return (
          <div key={recipe.id}>
            <RecipeSummary recipe={recipe}/>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList;
