import React from 'react'
import { Form, Col } from "react-bootstrap"

const CreateReviewFormGroups = ({onChange}) => {
    const simpleRatings = require("../RecipeData").simpleRatings;
    const tasteRatings = require("../RecipeData").tasteRatings;
    return (
        <>
        <Form.Row>
        <Form.Group as={Col} sm={4}>
          <Form.Label>Was it <span className='italic'>really</span> simple?</Form.Label>
          {simpleRatings.map(s => {
            return (
              <Form.Check
                key={s}
                label={s}
                type="radio"
                name="simpleRating"
                value={s}
                onClick={onChange}
              />
            );
          })}
        </Form.Group>
        <Form.Group as={Col} sm={8}>
          <Form.Label>How did it taste on a scale of 1-5?</Form.Label>
          <Form.Control
            as="select"
            name="tasteRating"
            onChange={onChange}
          >
            {tasteRatings.map(r => {
              return (
                <option key={r} value={r}>
                  {r}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>Comments</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="comments"
          onChange={onChange}
        />
      </Form.Group>
      </>
    );
}

export default CreateReviewFormGroups