import React from 'react'
import {FormControl} from 'react-bootstrap'

const SearchRecipeInput = ({onChange, onFocus}) => {
    return (
        <FormControl
          inline
          type="text"
          placeholder="Search..."
          name="title"
          onChange={onChange}
          onFocus = {onFocus}
        />
    )
}

export default SearchRecipeInput