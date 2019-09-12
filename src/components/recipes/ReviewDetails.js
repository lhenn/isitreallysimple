import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

const ReviewDetails = ({review}) => {
    return(
        <Card>
            <Card.Title>{review.authorUsername}</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <ListGroup>
                <ListGroupItem>{review.simpleRating}</ListGroupItem>
                <ListGroupItem>{review.tasteRating}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                {review.comments}
            </Card.Body>
            
            
        </Card>
    )
    
}

export default ReviewDetails