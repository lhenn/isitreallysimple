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
  
  const mealTypes = ['All','Pudding', 'Meat', 'Rice, Grains, and Pulses', 'Noodles and Pasta'];
  return(
    <div>
    <h5>Filter Recipes</h5>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="filter.mealType">
        <Form.Label>Meal Type</Form.Label>
        <Form.Control as='select' name="selectedMealType" onChange={handleChange}>
          {mealTypes.map(m => {
            return( <option key={m} value={m}>{m}</option>)
          })}
        </Form.Control>
      </Form.Group>
      <Form.Group/>
        <Form.Check inline label="most simple" type='radio' name="sortBySimple" id='mostSimple' value="mostSimple" onClick={handleChange}/>
        <Form.Check inline label="least simple" type='radio' name="sortBySimple" id='leastSimple' value="leastSimple" onClick={handleChange}/>
      <Form.Group/>
      <Form.Group/>
        <Form.Check inline label="most tasty" type='radio' name='sortByTaste' id='mostTasty' value="mostTasty" onClick={handleChange} />
        <Form.Check inline label="least tasty" type='radio' name='sortByTaste' id='leastTasty' value="leastTasty" onClick={handleChange} />
      <Form.Group/>
      <Button variant="primary" type="submit">
          Find Recipes
      </Button>
    </Form>
    </div>


  )
  

}

export default RecipeFilter
