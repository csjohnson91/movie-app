import * as React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import './../styles/MovieListItem.css'
import { Link } from "react-router-dom";

type MovieListItemProps = {
  title: string,
  posterPath: string,
  id: number
};

const MovieListItem = ({ title, posterPath, id }: MovieListItemProps) => {
  return (
    <Link to={`${id}`}><Card style={{ width: '10rem' }}>
      <CardImg className='card-image' variant="top" src={posterPath}/>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle className='card-subtitle'>Month Year</CardSubtitle>
      </CardBody>
    </Card>
   </Link>
  )
};

export default MovieListItem;