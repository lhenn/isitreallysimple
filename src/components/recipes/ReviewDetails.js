import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import SimpleRatings from "./summary/SimpleRatings";
import TasteRatings from "./summary/TasteRatings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";

const ReviewDetails = ({ review }) => {
  const simpleRatingIcon = rating => {
    switch (rating) {
      case "simple":
        return (
          <div className="simple-icon-background simpleRating">
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
        );
      case "not simple":
        return (
          <div className="not-simple-icon-background simpleRating">
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="review-details">
      <div className="overview">
        <div className="header">
          <div className="author">{review.authorUsername}</div>
          <div className="createdAt">
            {moment(review.createdAt.toDate()).calendar()}
          </div>
        </div>
        <div className="ratings">
          {simpleRatingIcon(review.simpleRating)}
          <TasteRatings
            className="tasteRating"
            tasteRatings={[review.tasteRating]}
          />
        </div>
      </div>

      <div className="comments">{review.comments}</div>
    </div>
  );
};

export default ReviewDetails;

// <Card>
//             <Row>
//                 <Col xs={7}>
//                 <Card.Title>{review.authorUsername}</Card.Title>
//                 <Card.Subtitle>{moment(review.createdAt.toDate()).calendar()}</Card.Subtitle>
//                 </Col>
//                 <Col xs={3}>
//                 {simpleRatingIcon(review.simpleRating)}
//                 </Col>
//                 <Col xs={2}>
//                 <TasteRatings tasteRatings={[review.tasteRating]}/>
//                 </Col>

//             </Row>

//             <Card.Body>
//                 {review.comments}
//             </Card.Body>

//         </Card>
