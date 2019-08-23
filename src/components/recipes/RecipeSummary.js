import React from 'react'

const RecipeSummary = ({recipe}) => {
  const simpleCats = recipe.simpleCategories.map(cat => {
    return (
      <span key={cat}>
        {cat}
      </span>
    )
  })
  return (
    <div className="card">
      <div>{recipe.title}</div>
      <div>{recipe.mealType}</div>
      <div>{simpleCats}</div>
    </div>
  )

}

export default RecipeSummary;
