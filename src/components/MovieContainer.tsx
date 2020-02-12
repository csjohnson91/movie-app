import * as React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { Col, Container, Row } from "reactstrap";
import './../styles/MovieContainer.css'
import PopularMovies from "./PopularMovies";
import Header from "./Header";
import SearchBar from "./SearchBar";
import history from '../history'
import SearchResults from "./SearchResults";

const MovieContainer = () => {
  const handleSearch = (query: string) => {
    history.push(`/search/${query}`)
  };

  return (
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
              <SearchBar onSearch={handleSearch}/>
            </Col>
          </Row>
          <Row className='movie-list-row'>
            <PopularMovies/>
          </Row>
        </Route>
        <Route path={'/movie/:movieId'}>
          <MovieDetail/>
        </Route>
        <Route path={'/search/:query'}>
          <SearchResults />
        </Route>
      </Switch>
    </Container>
  );
};

export default MovieContainer;