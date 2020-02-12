import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Col, Container, Row, Spinner } from 'reactstrap';
import { getMovieDetailUrl, getPosterUrl, getBackDropUrl } from '../utility/urlConstructor'
import { getYearFromDate, objectIsEmpty } from '../utility/utilities';
import DetailBackdrop from './DetailBackdrop';
import '../styles/MovieDetail.css'
import Axios from 'axios';

type MovieInformation = {
  title: string,
  releaseDate: string,
  userScore: number,
  runtime: number,
  overview: string
  posterPath: string
  backdropPath: string
}

const convertMinutesToHoursAndMinutes = (totalMinutes: number) => {
  const hours = totalMinutes / 60 | 0;
  const minutes = totalMinutes % 60 | 0;

  return `${hours}h ${minutes}min`
};

const MovieDetail = () => {
  let { movieId }: UrlParams = useParams();
  const [movieData, setMovieData] = useState<Data>(null);
  const url = getMovieDetailUrl(movieId);

  useEffect(() => {
      const fetchData = async () => {
        const response = await Axios(url);
        setMovieData(response.data);
      };
      fetchData();

    }, [url]
  );

  if (!movieData) {
    return <Spinner/>;
  } else if (objectIsEmpty(movieData)) {
    return <div>Whoops! We cannot find this movie! Go <Link to='/'>home</Link> and try again</div>
  } else {
    const movieInfo: MovieInformation = {
      title: movieData.title,
      releaseDate: movieData.release_date,
      userScore: movieData.vote_average,
      runtime: movieData.runtime,
      overview: movieData.overview,
      posterPath: movieData.poster_path,
      backdropPath: movieData.backdrop_path
    };

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
            <img
              className='poster-image'
              src={getPosterUrl(movieInfo.posterPath, 185)}
              alt={`${movieInfo.title}-poster`}
            />
          </Col>
          <Col xs='7' md='8' className='details-col'>
            <Row>
              <div className='title'>{movieInfo.title}</div>
            </Row>
            <Row>
              <p className='info'>
                {getYearFromDate(movieInfo.releaseDate)} - {movieInfo.userScore * 10}% User Score
              </p>
            </Row>
            <Row>
              <p className='info runtime'>
                {convertMinutesToHoursAndMinutes(movieInfo.runtime)}
              </p>
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