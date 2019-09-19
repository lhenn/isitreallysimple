import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const SimpleRatings = ({simpleRatings}) => {
  const simpleCount = require("../RecipeData").countSimpleRatings(simpleRatings).simple;
  const notSimpleCount = require("../RecipeData").countSimpleRatings(simpleRatings).notSimple;

  return(
    <div className='simple-ratings-container'>
      <div className='simple-rating'><span>({simpleCount}) </span><FontAwesomeIcon icon={faThumbsUp} /></div>
      <div className='simple-rating'><span>({notSimpleCount}) </span><FontAwesomeIcon icon={faThumbsDown} /></div>
    </div>
  )

}

export default SimpleRatings
