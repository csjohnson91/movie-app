import * as React from "react";
import MovieListItem from "./MovieListItem";
import movieInfo from './../movieInfo.json'
import { Switch, useRouteMatch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <div className="movies">
          {movieInfo.map(movie =>
            <MovieListItem title={movie.name} posterPath={movie.image} id={movie.id}/>
          )}
        </div>
      </Route>
      <Route path={'/:movieId'}>
        <MovieDetail />
      </Route>
    </Switch>
  );
};


export default MovieList;