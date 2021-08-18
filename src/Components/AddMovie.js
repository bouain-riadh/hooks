import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


const AddMovie = ({handleClose, show, addMovie}) => {
    const [newMovie, setNewMovie] = useState({
        title:"",
        img:"",
        duration:0,
        genre:"",
        date:"",
        rate:1,
        description:"",
    });
    const handleChange =(e) =>{
      setNewMovie({...newMovie, [e.target.name]: e.target.value})
    };
    const onStarClick =(nextValue, prevValue, name) =>{
      setNewMovie({...newMovie, rate: nextValue});
    };  
    return (
        <div>
               <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="email" placeholder="put a movie title" name="title" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Img URL</Form.Label>
    <Form.Control type="password" placeholder="put a movie image" name="img" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Duration</Form.Label>
    <Form.Control type="text" placeholder="put a movie duration" name="duration" onChange={handleChange}/>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newMovie.rate}
          onStarClick={onStarClick}
          onChange={handleChange}
        />
  </Form.Group>
  <Form.Select aria-label="Default select example" name="genre" onChange={handleChange}> 
  <option>Select a movie genre</option>
  <option>Drama</option>
  <option>Action</option>
  <option>Comedy</option>
  <option>Horror</option>
  <option>Fantasy</option>
</Form.Select>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Movie description</Form.Label>
    <Form.Control as="textarea" rows={2} name="description" onChange={handleChange}/>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>{
            addMovie(newMovie)
            handleClose()}}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
