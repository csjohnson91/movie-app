import React from 'react'
import { Badge } from "reactstrap";

type UserRatingBadgeProps = {
  children: string
}

const GREAT_RATING = 75;
const AVERAGE_RATING = 50;

const UserRatingBadge = ({ children }: UserRatingBadgeProps) => {
  const rating = parseFloat(children) * 10;
  if (rating >= GREAT_RATING) {
    return <Badge color='primary'>{rating}%</Badge>
  } else if (rating >= AVERAGE_RATING) {
    return <Badge color='warning'>{rating}%</Badge>
  }

  return <Badge color='danger'>{rating}%</Badge>
};

export default UserRatingBadge