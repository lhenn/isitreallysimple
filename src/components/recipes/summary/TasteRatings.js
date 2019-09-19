import React from 'react'

const TasteRatings = ({tasteRatings}) => {
  const averageTasteRatings = require("../RecipeData").averageTasteRatings;
  return (
    <div>&#128069; {averageTasteRatings(tasteRatings)}/5</div>
  )
}

export default TasteRatings
