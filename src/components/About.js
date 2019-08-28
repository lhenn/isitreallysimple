import React from 'react'
import {Container} from 'react-bootstrap';

const About = () => {
  return(
    <Container>
      <h2>About</h2>
      <p>
      Yotam Ottolenghi is well-renowned chef, restaurant-owner, and (most relevant to our purpose)
      <span className="italic"> cookbook author</span>. He has published several popular cookbooks full of
      delicious, primarily middle-eastern recipes.
      </p>
      <p>
      In fact, it was while following his recipes in <span className="italic"> Jerusalem </span> (2012) that my boyfriend
      and I started dating, then fell in love, and now find ourselves still cooking his recipes together 5 years later.
      </p>
      <p>
      This might seem romantic, but the truth of the matter is that during our third date, when we were cooking (insert lamb pistachio dish here)
       
      </p>


      <iframe src="https://giphy.com/embed/QzSiPlYf3PYVa" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </Container>
  )

}

export default About;
