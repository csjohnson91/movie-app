import * as React from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import './../styles/SearchBar.css'
import { useState } from 'react';

type SearchBarProps = {
  onSearch: Function
}

const SearchBar = ({ onSearch }: SearchBarProps) => {

  const [state, setState] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSearch(state)
  };

  return (
    <InputGroup>
      <Input
        className='searchBarInput'
        placeholder="Search"
        type='search'
        name='search'
        id='searchBar'
        onChange={(e) => setState(e.target.value)}
      />
      <InputGroupAddon addonType='append'>
        <Button color='link' onClick={handleSubmit}>
          <FaSearch className='green-text'/>
        </Button>
      </InputGroupAddon>
    </InputGroup>
  )
};

export default SearchBar;