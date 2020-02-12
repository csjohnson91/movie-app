import React from 'react';
import { objectIsEmpty } from '../utility/utilities';
import { Col, Container, Row } from 'reactstrap';
import MovieListItem from './MovieListItem';
import '../styles/MovieList.css'

type MovieListProps = {
  movies: Array<{ [key: string]: any }>
  listTitle: string
}

const MovieList = ({ movies, listTitle }: MovieListProps) => {
  if (!movies || objectIsEmpty(movies)) {
    return <div>No movies to display.</div>
  }

  return <Container>
    <Row>
      <Col className='movie-list-col movie-list-title'>
        {listTitle}
      </Col>
    </Row>
    <Row>
      {movies.map((movie, index) => (
        <Col className='movie-list-col' key={`MovieListCol-${index}`}>
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