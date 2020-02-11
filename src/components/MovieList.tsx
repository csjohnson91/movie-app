import * as React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { Col, Container, Row } from "reactstrap";
import './../styles/MovieList.css'
import PopularMovies from "./PopularMovies";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { fetchDataAndSetState, getSearchUrl } from "../utility/tmdbFetcher";

const MovieList = () => {
  const [searchResults, setSearchResults] = useState<Data>(null);

  const handleSearch = (query: string) => {
    const url = getSearchUrl(query);
    fetchDataAndSetState(setSearchResults, url);
    console.log(searchResults)
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
              <SearchBar callBack={handleSearch}/>
            </Col>
          </Row>
          <Row className='movie-list-row'>
            <PopularMovies/>
          </Row>
        </Route>
        <Route>
          <Route path={'/:movieId'}>
            <MovieDetail />
          </Route>
        </Route>
      </Switch>
    </Container>
  );
};

export default MovieList;