import React from 'react'
import {Card} from 'react-bootstrap'
import SimpleCategories from './SimpleCategories'

const RecipeInfo = ({recipe}) => {
 return(
    <div className='recipe-summary-info'>
        <div>{recipe.mealType}</div>
        <SimpleCategories categories={recipe.simpleCategories}/>
    </div>
 )
}

export default RecipeInfo