import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'

type MovieInformation = {
  title: string,
  releaseDate: string,
  userScore: number,
  runtime: number,
  overview: string
  posterPath: string
  backdropPath: string
}

type Data = {
  [key: string]: any
}

const MovieDetail = () => {
  let { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=6ed12e064b90ae1290fa326ce9e790ff`;
  const [data, setData] = useState<Data>({});

  useEffect(
    () => {
     let mounted = true;

      const loadData = async () => {
        const response = await Axios.get(url);
        if (mounted) {
          setData(response.data);
        }
      };

      loadData();

      return () => {
        mounted = false;
      };
    },
    [url]
  );

  if (!data) {
    return <div>Loading data from {url}</div>;
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
    </div>;
  }
};

export default MovieDetail;