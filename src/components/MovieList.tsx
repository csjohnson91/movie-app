import React from 'react';
import { objectIsEmpty } from "../utility/utilities";
import { Col, Container, Row } from "reactstrap";
import MovieListItem from "./MovieListItem";
import '../styles/MovieList.css'

type MovieListProps = {
  movies: Array<{ [key: string]: any }>
}

const MovieList = ({ movies }: MovieListProps) => {
  if (objectIsEmpty(movies)) {
    return <div>No movies to display.</div>
  }

  return <Container>
    <Row>
      <Col className='movie-list-col movie-list-title'>
        Popular Movies
      </Col>
    </Row>
    <Row>
      {movies.map(movie => (
        <Col className='movie-list-col'>
          <MovieListItem
            title={movie.title}
            posterPath={movie.poster_path}
            id={movie.id}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        </Col>
      ))}
    </Row>
  </Container>
};

export default MovieList