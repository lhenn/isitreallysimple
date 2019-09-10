import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Container, Row, Col} from 'react-bootstrap';
import RecipeList from '../recipes/RecipeList';

const Home = ({recipes}) => {
  return(
    <Container>
      <Row>
      <Col sm={8}>
        <h2>Recent Reviews</h2>
        <RecipeList recipes={recipes}/>
      </Col>
      <Col>Notifications</Col>
      </Row>
    </Container>
  )

}

const mapStateToProps = (state) => {
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Home);
