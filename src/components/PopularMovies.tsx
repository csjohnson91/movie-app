import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from "reactstrap";
import MovieListItem from './MovieListItem';
import { fetchDataAndSetState, getPopularMovieUrl } from "../utility/tmdbFetcher";
import { objectIsEmpty } from "../utility/utilities";
import { Link } from "react-router-dom";
import '../styles/PopularMovies.css'

const PopularMovies = () => {
  const [data, setData] = useState<Data>(null);
  const url = getPopularMovieUrl(1);

  useEffect(() => fetchDataAndSetState(setData, url), [url]);

  if (!data) {
    return <Spinner/>;
  } else if (objectIsEmpty(data)) {
    return <div>Whoops! Something is very wrong! Go <Link to='/'>home</Link> and try again</div>
  } else {
    const movies: Array<{ [key: string]: any }> = data.results;
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
  }
};

export default PopularMovies