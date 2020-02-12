import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { getPopularMovieUrl } from '../utility/urlConstructor';
import { objectIsEmpty } from '../utility/utilities';
import MovieList from './MovieList';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Data>(null);
  const url = getPopularMovieUrl(1);

  useEffect(() => {
      const fetchData = async () => {
        const response = await Axios(url);
        setPopularMovies(response.data);
      };
      fetchData();

    }, [url]
  );

  if (!popularMovies) {
    return <Spinner/>;
  } else if (objectIsEmpty(popularMovies)) {
    return <div>Whoops! Something is very wrong! Go <Link to='/'>home</Link> and try again</div>
  } else {
    const movies: Array<{ [key: string]: any }> = popularMovies.results;
    // TODO: in future the real number could be passed in here, but it's currently only used to determine if there are ANY results anyway
    return <MovieList numberOfResults={1} listTitle='Popular Movies' movies={movies}/>
  }
};

export default PopularMovies