import React from 'react'
import { ChangeEvent} from "react";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({onChange}: Props) => {
  return (
    <input type="text" className='form-control form-search'
      onChange={onChange}  />
  )
}

export default SearchBar
