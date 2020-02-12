import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSearchUrl } from '../utility/tmdbFetcher';
import Axios from 'axios';
import MovieList from './MovieList';
import { Spinner } from 'reactstrap';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState<Data>(null);
  let { query }: UrlParams = useParams();
  const url = getSearchUrl(query);

  useEffect(() => {
      const fetchData = async () => {
        const response = await Axios(url);
        setSearchResults(response.data);
      };
      fetchData();

    }, [query, url]
  );

  if (searchResults == null) {
    return <Spinner/>
  }
  return <MovieList listTitle='Search Results' numberOfResults={searchResults.total_results} movies={searchResults.results}/>
};

export default SearchResults

