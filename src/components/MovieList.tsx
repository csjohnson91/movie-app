import * as React from "react";
import MovieListItem from "./MovieListItem";
import movieInfo from './../movieInfo.json'
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { Col, Row } from "reactstrap";
import './../styles/MovieList.css'


const MovieList = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Row className='movieListRow'>
        {movieInfo.map(movie =>
          <Col className='movieListCol'>
            <MovieListItem title={movie.name} posterPath={movie.image} id={movie.id}/>
          </Col>
        )}
        </Row>
      </Route>
      <Route path={'/:movieId'}>
        <MovieDetail />
      </Route>
    </Switch>
  );
};


export default MovieList;