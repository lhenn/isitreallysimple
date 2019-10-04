import React from "react";
import { Container } from "react-bootstrap";
import SimpleCategories from "./recipes/summary/SimpleCategories";

const About = () => {
  const simpleCategories = require("./recipes/RecipeData").simpleCategories;
  return (
    <Container>
      <h2>About</h2>
      <p>
        Yotam Ottolenghi is well-renowned chef, restaurant-owner, and (most
        relevant to our purpose)
        <span className="italic"> cookbook author</span>. He has published
        several popular cookbooks full of delicious, primarily middle-eastern
        recipes.
      </p>
      <p>
        Most would agree that Ottolenghi's recipes are delicious, but few would
        call his recipes easy or convenient. Often they require hard-to-find
        ingredients, much planning ahead, or laborious tasks such as
        hand-picking thyme leaves or peeling tomatoes. In his cookbook Simple
        (2018), Ottolenghi attempts to present recipes that are, in some form,
        simple. This platform has been built to judge if he has succeeded or not
        on a recipe by recipe basis. Collectively we are asking the question:
        <span className="italic"> really</span>??
      </p>

      <iframe
          src="https://giphy.com/embed/QzSiPlYf3PYVa"
          width="100%"
          height="auto"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        
      <h3>Simple Criteria</h3>
      <p>
        If you are not familiar with the Ottolenghi's simple categories (which
        he assigns to each recipe), I list them below.
      </p>
      <ul>
        {simpleCategories.map((cat, index) => {
          return (
            <li key={index} id="category-list-item">
              <SimpleCategories categories={[cat.name]} />
              <p>{cat.description}</p>
            </li>
          );
        })}
      </ul>
      <p>
        More information on each category is found in the book. I hope you keep Ottolenghi's criteria in mind while ranking the recipes!
      </p>
    </Container>
  );
};

export default About;
