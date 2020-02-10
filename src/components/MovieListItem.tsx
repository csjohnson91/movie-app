import * as React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import './../styles/MovieListItem.css'
import { Link } from "react-router-dom";
import * as moment from 'moment';
import { getImageUrl } from "../utility/tmdbFetcher";

type MovieListItemProps = {
  title: string,
  posterPath: string,
  id: number,
  releaseDate: string
};

const getMonthAndYearFromDate = (date: String) => {
  // @ts-ignore
  const parsedDate = moment(date, 'YYYY-MM-DD');
  return parsedDate.format('MMMM YYYY')
};

const MovieListItem = ({ title, posterPath, id, releaseDate }: MovieListItemProps) => {
  return (
    <Link to={`${id}`}>
      <Card style={{ width: '10rem' }}>
        <CardImg className='card-image' variant="top" src={getImageUrl(posterPath, 200)}/>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle className='card-subtitle'>{getMonthAndYearFromDate(releaseDate)}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  )
};

export default MovieListItem;