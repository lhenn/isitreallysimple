import React from 'react'

const TasteRatings = ({tasteRatings}) => {
  const averageTasteRatings = require("../RecipeData").averageTasteRatings;
  return (
    <div className='taste-rating'>
      <span className='rating-emoji'>&#128069; </span> {averageTasteRatings(tasteRatings)}/5
    </div>
  )
}

export default TasteRatings
