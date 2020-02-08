import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import { Container, Row } from 'reactstrap';
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

function App() {
  return (
    <div className='app'>
      <Container>
        <Row>
          <Header/>
        </Row>
        <Row>
          <SearchBar/>
        </Row>
        <Row>
          <MovieList/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
