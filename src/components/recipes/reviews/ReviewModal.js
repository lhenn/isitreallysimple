import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import CreateReview from './CreateReview'
import { createReview } from "../../../store/actions/recipeActions"
import { connect } from "react-redux"

const ReviewModal = ({recipe, recipeID, createReview}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleReviewSubmit = (review) => {
        let args = {...review, recipeID:recipeID}
        createReview(args);
        setShow(false);
    }
    console.log(recipeID)
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Review
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post your review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <CreateReview recipe={recipe} recipeID={recipeID} onReviewSubmit={handleReviewSubmit}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      createReview: review => dispatch(createReview(review))
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(ReviewModal);

