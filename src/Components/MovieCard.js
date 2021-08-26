import React from 'react'
import { Card , ListGroup,ListGroupItem} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Navbar , Nav , NavDropdown , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MovieCard = ({movies}) => {
    return (
        <div>
         
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movies.img} />
  <Card.Body>
    <Card.Title><Link to={`/${movies.title}`}>{movies.title}</Link></Card.Title>
    <Card.Subtitle></Card.Subtitle>
    <ReactStars
    count={5}
    activeColor="#ffd700"
    value={movies.rate}
  />
    <Card.Text>
        {movies.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movies.date}</ListGroupItem>
    <ListGroupItem>{movies.duration}</ListGroupItem>
    <ListGroupItem>{movies.genre}</ListGroupItem>
  </ListGroup>
</Card>
        </div>

    )
}


export default MovieCard