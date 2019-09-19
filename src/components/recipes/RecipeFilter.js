import React, { Component } from "react";
import { Button, Form, Row, Col, FormControl } from "react-bootstrap";

const RecipeFilter = ({ onChangeFilterData, onSubmit }) => {
  const handleChange = e => {
    onChangeFilterData(e.target.name, e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit} id="filter-container" as={Row} >
      <Form.Group as={Col} sm={8}>
        <FormControl
          inline
          type="text"
          placeholder="Search..."
          name="title"
        />
      </Form.Group>
      <Form.Group inline as={Col} sm={4} >
        <Button inline variant="secondary" className="filter-button" size="small">
          Simplest
        </Button>
        <Button inline variant="secondary" className="filter-button" size="small">
          Tastiest
        </Button>
      </Form.Group>
    </Form>
  );
};

export default RecipeFilter;
