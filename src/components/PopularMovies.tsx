import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { fetchDataAndSetState, getPopularMovieUrl } from '../utility/tmdbFetcher';
import { objectIsEmpty } from '../utility/utilities';
import MovieList from './MovieList';
import { Link } from 'react-router-dom';

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
    // TODO: in future the real number could be passed in here, but it's currently only used to determine if there are ANY results anyway
    return <MovieList numberOfResults={1} listTitle='Popular Movies' movies={movies}/>
  }
};

export default PopularMovies