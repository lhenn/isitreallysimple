import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Container, Row, Col} from 'react-bootstrap';
import RecipeList from '../recipes/RecipeList';

class Home extends Component {

  render() {
    console.log(this.props.recipes);
    return(
      <Container>
        <Row>
        <Col sm={8}>
          <h2>Recent Reviews</h2>
          <RecipeList/>
        </Col>
        <Col>Notifications</Col>
        </Row>

      </Container>
    )
  }
}

export default Home
