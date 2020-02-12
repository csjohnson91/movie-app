import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { fetchDataAndSetState, getPopularMovieUrl } from '../utility/tmdbFetcher';
import { objectIsEmpty } from '../utility/utilities';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';

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
    return <MovieList movies={movies}/>
  }
};

export default PopularMovies