import React from 'react'
import {Card, Badge} from 'react-bootstrap'
import SimpleCategories from './SimpleCategories'
import SimpleRatings from './SimpleRatings'
import TasteRatings from './TasteRatings'


const RecipeSummary = ({recipe}) => {
  return (
    <Card style={{width:'auto'}}>
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <div className='recipe-summary-container'>
          <div className='recipe-summary-info'>
            <Card.Text>{recipe.mealType}</Card.Text>
            <SimpleCategories categories={recipe.simpleCategories}/>
          </div>
          <div className='recipe-summary-ratings'>
            <SimpleRatings/>
            <TasteRatings/>
          </div>
        </div>
      </Card.Body>

    </Card>
  )

}

export default RecipeSummary;
