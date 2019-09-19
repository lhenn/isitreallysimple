import React from 'react'
import { Container } from 'react-bootstrap'
import ReviewRecipeContent from './ReviewRecipeContent'



const ReviewRecipe = () => {
    return (
        <Container className="review-container">
            <h2>Review a recipe</h2>
            <ReviewRecipeContent/>
        </Container>
    )
}

export default ReviewRecipe