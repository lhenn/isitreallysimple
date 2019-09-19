import React from 'react'
import {Card, Badge} from 'react-bootstrap'
import SimpleRatings from './SimpleRatings'
import TasteRatings from './TasteRatings'
import RecipeInfo from './RecipeInfo'


const RecipeSummary = ({recipe}) => {
  console.log({recipe})
  return (
    <Card className="summary-card">
      <Card.Body>
        <Card.Title className="recipe-title">{recipe.title}</Card.Title>
        <div className='recipe-summary-container'>
          <RecipeInfo recipe={recipe}/>
          <div className='recipe-summary-ratings'>
            <SimpleRatings simpleRatings={recipe.reviews ? recipe.reviews.map(r => r.simpleRating) : null}/>
            <TasteRatings tasteRatings={recipe.reviews ? recipe.reviews.map(r => r.tasteRating) : null}/>
          </div>
        </div>
      </Card.Body>

    </Card>
  )

}


export default RecipeSummary



