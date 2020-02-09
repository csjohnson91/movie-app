import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import { Col, Container, Row } from 'reactstrap';
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Container className='verticallyPadded'>
        <Switch>
          <Route exact path='/'>
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
          </Route>
          <Route>
            <MovieList />
          </Route>
        </Switch>

      </Container>
    </div>
  );
}

export default App;
