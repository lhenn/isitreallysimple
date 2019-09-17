import React, {Component} from 'react'
import {Button, Form} from 'react-bootstrap'


const RecipeFilter = ({onChangeFilterData, onSubmit}) => {

  const handleChange = (e) => {
    onChangeFilterData(e.target.name, e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }
  
  const mealTypes = require('./RecipeData').mealTypes;
  const simpleCategories = require('./RecipeData').simpleCategories;
  return(
    <Form onSubmit={handleSubmit}>
      <h5>Sort</h5>
      <Form.Group>
          <Button>Simplest recipes</Button>
          <Button>Tastiest recipes</Button>
      </Form.Group>
      <h5>Filter</h5>
      <Form.Group>
        <Form.Label>Meal type</Form.Label>
          {mealTypes.map(m => {
            return( <Button key={m} name='mealType' value={m} onClick={handleChange}>{m}</Button>)
          })}
      </Form.Group>
      <Form.Group >
        <Form.Label>Simple categories</Form.Label>
        
          {simpleCategories.map(s => {
            return( <Button>{s}</Button>)
          })}

      </Form.Group>
      <Button variant="primary" type="submit">
          Find Recipes
      </Button>
    </Form>
  )

}

export default RecipeFilter
