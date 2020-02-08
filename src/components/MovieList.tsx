import * as React from "react";
import { Col, Row } from "react-bootstrap";
import MovieListItem from "./MovieListItem";

const MovieList = () => {
  return (
    <Col className='wrapper'>
      <Row><MovieListItem /></Row>
      <Row><MovieListItem /></Row>
      <Row><MovieListItem /></Row>
      <Row><MovieListItem /></Row>
    </Col>
  )
};

export default MovieList;