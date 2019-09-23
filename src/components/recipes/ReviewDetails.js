import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import SimpleRatings from './summary/SimpleRatings'
import TasteRatings from './summary/TasteRatings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment';

const ReviewDetails = ({review}) => {
    const simpleRatingIcon= (rating) => {
        switch(rating) {
            case('simple'):
                return (
                    <div className='simple-icon-background'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div> 
                    );
            case('not simple'):
                return (
                    <div className='not-simple-icon-background'>
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </div>
                );
            default: 
                return null;
        } 
    }
    return(
        <Card>
            <Row>
                <Col xs={7}>
                <Card.Title>{review.authorUsername}</Card.Title>
                <Card.Subtitle>{moment(review.createdAt.toDate()).calendar()}</Card.Subtitle>
                </Col>
                <Col xs={3}>
                {simpleRatingIcon(review.simpleRating)}
                </Col>
                <Col xs={2}>
                <TasteRatings tasteRatings={[review.tasteRating]}/>
                </Col>
           
            </Row>

            <Card.Body>
                {review.comments}
            </Card.Body>
            
            
        </Card>
    )
    
}

export default ReviewDetails