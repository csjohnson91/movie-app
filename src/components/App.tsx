import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

function App() {
  return (
      <Container className="App">
        <Row>
          <Col>
            <Header/>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <MovieList />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
