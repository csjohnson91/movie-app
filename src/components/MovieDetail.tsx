import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Col, Container, Row, Spinner } from "reactstrap";
import { getMovieDetailUrl, fetchDataAndSetState, getPosterUrl, getBackDropUrl } from '../utility/tmdbFetcher'
import { objectIsEmpty } from "../utility/utilities";
import DetailBackdrop from "./DetailBackdrop";
import '../styles/MovieDetail.css'

type MovieInformation = {
  title: string,
  releaseDate: string,
  userScore: number,
  runtime: number,
  overview: string
  posterPath: string
  backdropPath: string
}

const MovieDetail = () => {
  let { movieId }: UrlParams = useParams();
  const [data, setData] = useState<Data>(null);

  const url = getMovieDetailUrl(movieId);
  useEffect(() => fetchDataAndSetState(setData, url), [url]);

  if (!data) {
    return <Spinner/>;
  } else if (objectIsEmpty(data)) {
    return <div>Whoops! We cannot find this movie! Go <Link to='/'>home</Link> and try again</div>
  } else {
    const movieInfo: MovieInformation = {
      title: data.title,
      releaseDate: data.release_date,
      userScore: data.vote_average,
      runtime: data.runtime,
      overview: data.overview,
      posterPath: data.poster_path,
      backdropPath: data.backdrop_path
    };

    // TODO: maybe use Color Thief to tint backdrop with dominant colour
    return (
      <Container>
        <Row>
          <DetailBackdrop
            height={300}
            src={getBackDropUrl(movieInfo.backdropPath, 1280)}
            alt={`${movieInfo.title}-backdrop`}
          />
        </Row>
        <Row>
          <Col xs='5' md='4' className='poster-col'>
            <img className='poster-image' src={getPosterUrl(movieInfo.posterPath, 185)} alt={`${movieInfo.title}-poster`}/>
          </Col>
          <Col xs='7' md='8' className='details-col' >
            <Row>
              <h1>{movieInfo.title}</h1>
            </Row>
            <Row>
              <p>{movieInfo.releaseDate} - {movieInfo.userScore}/10 -{movieInfo.runtime}m</p>
            </Row>
          </Col>
        </Row>
        <Row className='overview-row-border'/>
        <Row>
          <h3 className='overview-heading'>Overview</h3>
        </Row>
        <Row>
          <p className='overview-text'>{movieInfo.overview}</p>
        </Row>
      </Container>
    )
  }
};

export default MovieDetail;