import * as React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';
import './../styles/MovieListItem.css'
import { Link } from 'react-router-dom';
import { getPosterUrl } from '../utility/tmdbFetcher';
import UserRatingBadge from './UserRatingBadge';
import { getMonthAndYearFromDate } from '../utility/utilities';

type MovieListItemProps = {
  title: string,
  posterPath: string,
  id: number,
  releaseDate: string
  rating: string
};


const truncateTitle = (title: string) => {
  const maxCharacters = 40;
  if (title.length > maxCharacters) {
    return `${title.substring(0, maxCharacters)}...`
  }
  return title
};

const MovieListItem = ({ title, posterPath, id, releaseDate, rating }: MovieListItemProps) => {
  return (
    <Link to={`movie/${id}`}>
      <Card className='text-left movie-card'>
        <div className='movie-card-rating'><UserRatingBadge>{rating}</UserRatingBadge></div>
        <CardImg className='movie-card-image' variant="top" src={getPosterUrl(posterPath, 185)}/>
        <CardBody className='movie-card-body'>
          <CardTitle className='movie-card-title'>{truncateTitle(title)}</CardTitle>
          <CardSubtitle className='movie-card-subtitle'>{getMonthAndYearFromDate(releaseDate)}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  )
};

export default MovieListItem;