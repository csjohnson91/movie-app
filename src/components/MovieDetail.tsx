import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Spinner } from "reactstrap";
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
      <div>
        <DetailBackdrop height={300} src={getBackDropUrl(movieInfo.backdropPath, 1280)} alt={`${movieInfo.title}-backdrop`} />
        <h1>{movieInfo.title}</h1>
        <img src={getPosterUrl(movieInfo.posterPath, 185)} alt={`${movieInfo.title}-poster`}/>
        <p>{movieInfo.releaseDate} - {movieInfo.userScore}/10 -{movieInfo.runtime}m</p>
        <h3>Overview</h3>
        <p>{movieInfo.overview}</p>
      </div>
    )
  }
};

export default MovieDetail;