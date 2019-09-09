import React from 'react'
import RecipeSummary from './RecipeSummary'
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

export default RecipeList;