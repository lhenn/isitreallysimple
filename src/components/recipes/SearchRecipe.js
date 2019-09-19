import React, {Component} from 'react'
import {Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";

class SearchRecipe extends Component {
    state = {
        title: '',
        recipeFound: false,
        recipe: {}
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const result = this.props.recipes.find(r => r.title === this.state.title);
        if (result === undefined) this.props.onNoResults(this.state.title);
        else this.setState({
            recipe: result,
            recipeFound: true
        })
    }

    render () {
        if(this.state.recipeFound) return <Redirect to={`/recipe/${this.state.recipe.id}`}/>
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <Row>
                    <Form.Group as={Col}>
                    <FormControl inline type="text" placeholder="Recipe title" name="title" onChange={this.handleChange} className="mr-sm-2" />
                    <Button inline type="submit">Search</Button>
                    </Form.Group>
                
                </Row>
                
            </Form>
            
        )
    }
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
  )(SearchRecipe);
  
