import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSearchUrl } from '../utility/tmdbFetcher';
import Axios from 'axios';
import MovieList from './MovieList';

const SearchResults = () => {
  const [data, setData] = useState<Data>(null);
  let { query }: UrlParams = useParams();
  const url = getSearchUrl(query);

  useEffect(() => {
      const fetchData = async () => {
        const result = await Axios(url);
        setData(result.data);
      };

      fetchData();
    }, [query, url]
  );
  // TODO: reusable whoops! component
  if (data == null) {
    return <div>whoops!</div>
  }
  return <MovieList listTitle='Search Results' movies={data.results}/>
};

export default SearchResults

