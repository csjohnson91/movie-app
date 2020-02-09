import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import { Col, Container, Row } from 'reactstrap';
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

function App() {
  return (
    <div className='app'>
      <Container className='verticallyPadded'>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className='verticallyPadded'>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className='verticallyPadded'>
            <SearchBar/>
          </Col>
        </Row>
        <MovieList/>
      </Container>
    </div>
  );
}

export default App;
