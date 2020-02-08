import * as React from "react";
import MovieListItem from "./MovieListItem";
import movieInfo from './../movieInfo.json'

const MovieList = () => {
  return (
    <div className="movies">
      {movieInfo.map(movie =>
        <MovieListItem movieTitle={movie.name} imageSrc={movie.image}/>
      )}
    </div>
  );
};

export default MovieList;