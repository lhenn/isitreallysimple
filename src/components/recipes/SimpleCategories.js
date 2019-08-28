import React from 'react'
import {Badge} from 'react-bootstrap'

const SimpleCategories = ({categories}) => {
  return(
  <h4>
    {categories.map(cat => {
      const catClass = 'simpleCategory' + ' ' + cat;
      return (
        <Badge pill variant={catClass} key={cat}>
          {cat}
        </Badge>
      )
    })}
  </h4>
)
}


export default SimpleCategories
