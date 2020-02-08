import * as React from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import './../styles/MovieListItem.css'

type MovieListItemProps = {
  movieTitle: string,
  imageSrc: string
}

const MovieListItem = ({movieTitle, imageSrc}: MovieListItemProps) => {
  // TODO: make card a link to MovieDetails
  return <Card style={{ width: '10rem' }}>
    <CardImg className='card-image' variant="top" src={imageSrc} />
    <CardBody>
      <CardTitle>{movieTitle}</CardTitle>
      <CardSubtitle className='card-subtitle'>Month Year</CardSubtitle>
    </CardBody>
  </Card>
};

export default MovieListItem;