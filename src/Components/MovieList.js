import React, {useState} from 'react';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

const MovieList = ({ movies, addMovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            {movies.map((el, i) =>(
                <MovieCard movies= {el} key={i} />
                
            ))}
            <div>
                <button style={{backgroundColor:"cyan", color:"black"}} onClick={handleShow}>Add a movie</button>
                <AddMovie handleClose={handleClose} show={show} addMovie={addMovie}/>
            </div>
        </div>
    )
}


export default MovieList
