import * as React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { Col, Container, Row } from "reactstrap";
import './../styles/MovieContainer.css'
import PopularMovies from "./PopularMovies";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { getSearchUrl } from "../utility/tmdbFetcher";
import Axios from "axios";

const MovieContainer = () => {
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<Data>({});

  useEffect(() => {
      if (query !== '') {
        const fetchData = async () => {
          const url = getSearchUrl(query);
          const result = await Axios(url);
          setData(result.data);
        };

        fetchData();
      }
    }, [query]
  );

  const handleSearch = (query: string) => {
    setQuery(query)
  };

  return (
    <Container className='verticallyPadded'>
      <Switch>
        <Route exact path='/'>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className='verticallyPadded'>
              <Header/>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className='verticallyPadded'>
              <SearchBar onSearch={handleSearch}/>
              <p>{JSON.stringify(data)}</p>
            </Col>
          </Row>
          <Row className='movie-list-row'>
            <PopularMovies/>
          </Row>
        </Route>
        <Route path={'/:movieId'}>
          <MovieDetail/>
        </Route>

      </Switch>
    </Container>
  );
};

export default MovieContainer;