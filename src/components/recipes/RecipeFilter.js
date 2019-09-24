import React, { Component } from "react";
import SearchRecipeInput from './SearchRecipeInput'
import {
  Button,
  Form,
  Row,
  Col,
  FormControl,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

const RecipeFilter = ({ onChange }) => {
  const handleChange = e => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <Form id="filter-container" as={Row}>
      <Form.Group as={Col} sm={8}>
        <SearchRecipeInput onChange={handleChange}/>
      </Form.Group>

      <ToggleButtonGroup type="radio" name="sortBy" inline as={Col} sm={4}>
        <ToggleButton
          name="sortBy"
          className="filter-button"
          variant="secondary"
          value="simplest"
          onChange={handleChange}
        >
          Simplest
        </ToggleButton>
        <ToggleButton
          name="sortBy"
          className="filter-button"
          variant="secondary"
          value="tastiest"
          onChange={handleChange}
        >
          Tastiest
        </ToggleButton>
      </ToggleButtonGroup>
    </Form>
  );
};

export default RecipeFilter;
