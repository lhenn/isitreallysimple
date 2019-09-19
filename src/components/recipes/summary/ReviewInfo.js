import React from 'react'
import SimpleRatings from './SimpleRatings'
import TasteRatings from './TasteRatings'

const ReviewInfo = ({recipe}) => {
 return(
    <div className='recipe-summary-ratings'>
        <SimpleRatings simpleRatings={recipe.reviews ? recipe.reviews.map(r => r.simpleRating) : null}/>
        <TasteRatings tasteRatings={recipe.reviews ? recipe.reviews.map(r => r.tasteRating) : null}/>
    </div>
 )
}

export default ReviewInfo