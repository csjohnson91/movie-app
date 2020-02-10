import * as React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import './../styles/MovieListItem.css'
import { Link } from "react-router-dom";
import * as moment from 'moment';
import { getImageUrl } from "../utility/tmdbFetcher";
import UserRatingBadge from "./UserRatingBadge";

type MovieListItemProps = {
  title: string,
  posterPath: string,
  id: number,
  releaseDate: string
  rating: string
};

const getMonthAndYearFromDate = (date: string) => {
  // @ts-ignore
  const parsedDate = moment(date, 'YYYY-MM-DD');
  return parsedDate.format('MMMM YYYY')
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
    <Link to={`${id}`}>
      <Card className='text-left movie-card'>
        <div className='movie-card-rating'><UserRatingBadge>{rating}</UserRatingBadge></div>
        <CardImg className='movie-card-image' variant="top" src={getImageUrl(posterPath, 200)} />
        <CardBody className='movie-card-body'>
          <CardTitle className='movie-card-title'>{truncateTitle(title)}</CardTitle>
          <CardSubtitle className='movie-card-subtitle'>{getMonthAndYearFromDate(releaseDate)}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  )
};

export default MovieListItem;