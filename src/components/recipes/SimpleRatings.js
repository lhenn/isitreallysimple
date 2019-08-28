import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const SimpleRatings = () => {
  return(
    <div className='simpleRatings-container'>
      <div className='simpleRating'><span>(0) </span><FontAwesomeIcon icon={faThumbsUp} /></div>
      <div className='simpleRating'><span>(0) </span><FontAwesomeIcon icon={faThumbsDown} /></div>
    </div>
  )

}

export default SimpleRatings
