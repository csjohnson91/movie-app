import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Spinner } from "reactstrap";
import { getMovieDetailUrl, fetchMovieDetailsAndUpdateState } from '../fetcher/tmdbFetcher'

type MovieInformation = {
  title: string,
  releaseDate: string,
  userScore: number,
  runtime: number,
  overview: string
  posterPath: string
  backdropPath: string
}

const objectIsEmpty = (obj: Data) => {
  return obj != null && Object.keys(obj).length === 0 && obj.constructor === Object
};

const MovieDetail = () => {
  let { movieId }: UrlParams = useParams();
  const [data, setData] = useState<Data>(null);

  const url = getMovieDetailUrl(movieId);
  useEffect(() => fetchMovieDetailsAndUpdateState(setData, url), [url]);

  if (!data) {
    return <Spinner />;
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

    return <div>
      <h1>{movieInfo.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w200${movieInfo.posterPath}`} alt={`${movieInfo.title}-poster`}/>
      <p>{movieInfo.releaseDate} - {movieInfo.userScore}/10 -{movieInfo.runtime}m</p>
      <h3>Overview</h3>
      <p>{movieInfo.overview}</p>
    </div>
  }
};

export default MovieDetail;