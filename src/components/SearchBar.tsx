import * as React from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import './../styles/SearchBar.css'

const SearchBar = () => {
  return (
    <InputGroup>
          <Input
            className='searchBarInput'
            placeholder="Search"
            type='search'
            name='search'
            id='searchBar'
            // TODO: make functional AND pretty
            //value={this.state.query}
            //onChange={this.handleInputChange}
          />
          <InputGroupAddon addonType='append'>
            <Button color='link' className='search-bar-button'><FaSearch className='green-text'/></Button>
          </InputGroupAddon>
    </InputGroup>
  )
};

export default SearchBar;