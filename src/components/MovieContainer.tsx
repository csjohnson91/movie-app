import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import { Container, Row } from 'reactstrap';
import './../styles/MovieContainer.css'
import PopularMovies from './PopularMovies';
import history from '../history'
import SearchResults from './SearchResults';
import SearchBarHeader from './SearchBarHeader';
const MovieContainer = () => {
  const handleSearch = (query: string) => {
    history.push(`/search/${query}`)
  };

  return (
    <Container className='verticallyPadded'>
      <Switch>
        <Route exact path='/'>
          <SearchBarHeader handleSearch={handleSearch}/>
          <Row className='movie-list-row'>
            <PopularMovies/>
          </Row>
        </Route>
        <Route path={'/movie/:movieId'}>
          <MovieDetail/>
        </Route>
        <Route path={'/search/:query'}>
          <SearchBarHeader handleSearch={handleSearch}/>
          <SearchResults/>
        </Route>
      </Switch>
    </Container>
  );
};

export default MovieContainer;