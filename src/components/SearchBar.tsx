import * as React from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import './../styles/SearchBar.css'

type SearchBarProps = {
  callBack: Function
}

const SearchBar = ({ callBack }: SearchBarProps) => {

  const handleChange = (event: {[key: string]: any}) => {
    callBack(event.target.value)
  };

  return (
    <InputGroup>
          <Input
            className='searchBarInput'
            placeholder="Search"
            type='search'
            name='search'
            id='searchBar'
            onChange={handleChange}
          />
          <InputGroupAddon addonType='append'>
            <Button color='link' className='search-bar-button'><FaSearch className='green-text'/></Button>
          </InputGroupAddon>
    </InputGroup>
  )
};

export default SearchBar;