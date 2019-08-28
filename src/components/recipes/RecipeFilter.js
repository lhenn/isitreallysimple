import React, {Component} from 'react'
import {Button, Badge, Form} from 'react-bootstrap'
import SimpleCategories from './SimpleCategories'

const SimpleCategoryFilter = () => {
  const cats = ['S','I','M','P','L','E'];
  return (
    <h4>
    {cats.map(cat => {
      return(
      <Badge key={cat} pill variant="outline-dark">{cat}</Badge>
      )
    })}
    </h4>
  )
}


class RecipeFilter extends Component {

  render() {
    const mealTypes = ['All','Pudding', 'Meat', 'Rice, Grains, and Pulses', 'Noodles and Pasta'];
    return(
      <div>
      <h5>Filter Recipes</h5>
      <Form>
        <Form.Group controlId="filter.mealType">
          <Form.Label>Meal Type</Form.Label>
          <Form.Control as='select'>
            {mealTypes.map(m => {
              return( <option key={m}>{m}</option>)
            })}
          </Form.Control>
        </Form.Group>
        <div className="mb-3">
          <Form.Check inline label="simple" type='radio' id={`inline-radio-1`} />
          <Form.Check inline label="not simple" type='radio' id={`inline-radio-2`} />
        </div>
      </Form>
      </div>


    )
  }

}

export default RecipeFilter
