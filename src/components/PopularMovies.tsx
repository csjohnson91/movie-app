import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { getPopularMovieUrl } from '../utility/urlConstructor';
import { objectIsEmpty } from '../utility/utilities';
import MovieList from './MovieList';
import { Link } from 'react-router-dom';
import Axios from 'axios';

/* Note that this is a bit hacky in the way that I'm composing two paginated responses to show the 40 most popular
 movies. In future this should be changed to some sort of infinite paged scroll solution. */

const composeResponses = (response1: Data, response2: Data) => {
  if (!response1 || !response2) {
    return {}
  }
  return { ...response1.data, results: [ ...response1.data.results, ...response2.data.results ] }
};

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Data>(null);
  const page1Url = getPopularMovieUrl(1);
  const page2Url = getPopularMovieUrl(2);

  useEffect(() => {
      const fetchData = async () => {
        const response1 = await Axios(page1Url);
        const response2 = await Axios(page2Url);
        setPopularMovies(composeResponses(response1, response2));
      };
      fetchData();

    }, [page1Url, page2Url]
  );

  if (!popularMovies) {
    return <Spinner/>;
  } else if (objectIsEmpty(popularMovies)) {
    return <div>Whoops! Something is very wrong! Go <Link to='/'>home</Link> and try again</div>
  } else {
    const movies: Array<{ [key: string]: any }> = popularMovies.results;
    /* in future the real number could be passed in here, but it's currently only used to determine
     if there are ANY results anyway */
    return <MovieList numberOfResults={1} listTitle='Popular Movies' movies={movies}/>
  }
};

export default PopularMovies