import React from "react";
import { useRouteMatch } from "react-router";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function Descreptio({ movies, handleClose }) {
  const match = useRouteMatch();
  const movie = movies.filter((movie) => movie.title == match.url.slice(1));
  return (
    <div style={{ backgroundColor: "#1F1F1F", height: "100%" }}>
      <div style={{ fontSize: "large", color: "white" }}>
        {movie[0].title} <br></br> {movie[0].date} . {movie[0].duration}
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie[0].img} />
        </Card>
        {movie[0].src}
      </div>
      <div style={{ fontSize: "large", color: "white" }}>
        {movie[0].description}
      </div>
      <div style={{ marginLeft: "600px" }}>
        <Button href="#">{movie[0].genre}</Button>
      </div>
      <div style={{}}>
        <ListGroup>
          <ListGroup.Item disabled>
            Directors Chad StahelskiDavid Leitch(uncredited)
          </ListGroup.Item>
          <ListGroup.Item>Writer Derek Kolstad</ListGroup.Item>
          <ListGroup.Item>
            Stars Keanu ReevesMichael NyqvistAlfie Allen
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div style={{ backgroundColor: "blue", color: "white", width: "22px" }}>
        <Button variant="secondary" onClick={handleClose}>
          <Link to="/"> Close </Link>
        </Button>
      </div>
    </div>
  );
}

export default Descreptio;
