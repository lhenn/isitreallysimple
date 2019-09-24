import React from 'react'
import {FormControl} from 'react-bootstrap'

const SearchRecipeInput = ({onChange}) => {
    return (
        <FormControl
          inline
          type="text"
          placeholder="Search..."
          name="title"
          onChange={onChange}
        />
    )
}

export default SearchRecipeInput