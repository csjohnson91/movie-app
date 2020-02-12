import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getSearchUrl } from "../utility/tmdbFetcher";
import Axios from "axios";

const SearchResults = () => {
  const [data, setData] = useState<Data>({});
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
  return <div>{JSON.stringify(data)}</div>
};

export default SearchResults

