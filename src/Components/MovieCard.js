import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getMovie } from "../js/actions/movieActions";
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { id, name, image, rating, date } = movie;
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Dispatch the getMovie action with the movie id
    dispatch(getMovie(id));
  };

  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px 0" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Rating readonly initialValue={rating} />
          <Card.Text> {date}</Card.Text>
          <Link to={`/details/${id}`}>
            <Button variant="primary" onClick={handleButtonClick}>Get Movie Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
