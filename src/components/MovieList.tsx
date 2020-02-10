import * as React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { Row } from "reactstrap";
import './../styles/MovieList.css'
import PopularMovies from "./PopularMovies";

const MovieList = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Row className='movieListRow'>
        <PopularMovies />
        </Row>
      </Route>
      <Route path={'/:movieId'}>
        <MovieDetail />
      </Route>
    </Switch>
  );
};

export default MovieList;