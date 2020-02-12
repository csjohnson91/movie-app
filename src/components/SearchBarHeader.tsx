import React from 'react'
import { Col, Row } from 'reactstrap';
import Header from './Header';
import SearchBar from './SearchBar';

type SearchBarHeaderProps = {
  handleSearch: Function
}

const SearchBarHeader = ({ handleSearch }: SearchBarHeaderProps) => {
  return (
    <>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className='verticallyPadded'>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className='verticallyPadded'>
          <SearchBar onSearch={handleSearch}/>
        </Col>
      </Row>
    </>
  )
};

export default SearchBarHeader;