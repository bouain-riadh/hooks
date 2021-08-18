import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import {Carousel} from 'react-bootstrap'
import Filter from './Components/Filter';


function App() {
  const [movies, setMovies] = useState([
    {
      title: "John Wick",
      duration: "1h 41min",
      date: "2014",
      rate: 4,
      genre: "Action,Crime,Thriller",
      description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      img: "https://i.egycdn.com/pic/WmFwZndlY21UWWp2TnBqRWNtYm1MTnBUcHZtbQ.jpg",
    },
    {
      title: "John Wick 2",
      duration: "2h 2min",
      date: "2017",
      rate: 2,
      genre: "Action,Crime,Thriller",
      description: "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
      img: "https://i.egycdn.com/pic/WmFwZndlY21ZRW1Fdk5qbWptRUVjY3dhbUVtbW1wSWFL.jpg",
    },
    {
      title: "John Wick 3",
      duration: "2h 10min",
      date: "2019",
      rate: 1,
      genre: "Action,Crime,Thriller",
      description: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: "https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm1FbWFjbUdrTkVtb3dQbWc.jpg",
    },
  ]);
  const [newRate , setNewRate] = useState(1);
  const [keyword , setKeywords] = useState("");
  const search = (text) => {
    setKeywords(text);
  };
 const setRate =(rate) => {
   setNewRate(rate);
 };
 const addMovie = (movie) => {
  setMovies(movies.concat(movie));
}
  return ( 
    <div className="App">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.alphacoders.com/112/thumb-1920-1124633.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Coming soon</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.wallpapersafari.com/65/79/Dl6Vpf.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Coming soon</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp1867290.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Coming soon</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Carousel>
<iframe width="560" height="315" src="https://www.youtube.com/embed/EFYEni2gsK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Carousel>      
      <Filter search={search} setRate={setRate} newRate={newRate}/>

      <MovieList 
      addMovie={addMovie}
       movies={movies.filter((movie) => 
        movie.rate >= newRate &&
      movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))} /> 
      </div>                                                      
  );
}

export default App;
