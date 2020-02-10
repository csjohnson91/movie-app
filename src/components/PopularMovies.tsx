import React from 'react'
import { Col } from "reactstrap";
import movieInfo from './../movieInfo.json'
import MovieListItem from './MovieListItem';

const PopularMovies = () => (
  <>
    {movieInfo.map(movie => (
      <Col className='movieListCol'>
        <MovieListItem title={movie.name} posterPath={movie.image} id={movie.id}/>
      </Col>
    ))}
  </>
);

export default PopularMovies