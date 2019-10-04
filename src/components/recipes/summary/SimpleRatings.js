import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const SimpleRatings = ({simpleRatings}) => {
  const simpleCount = require("../RecipeData").countSimpleRatings(simpleRatings).simple;
  const notSimpleCount = require("../RecipeData").countSimpleRatings(simpleRatings).notSimple;

  return(
    <div className='simple-ratings-container'>
      <div className='simple-rating'>
        <span className='rating-emoji'> &#128578;</span>
        <span className='simple-rating-count'>({simpleCount}) </span>
      </div>
      <div className='simple-rating'>
        <span className='rating-emoji'> &#128545;</span> 
        <span className='simple-rating-count'>({notSimpleCount}) </span>
      </div>
    </div>
  )

}

export default SimpleRatings
