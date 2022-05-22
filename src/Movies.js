import React, { useState } from "react";
import {Routes,Route} from "react-router-dom"
import NavBar from "./Comps/NavBar";
import MovieList from './Comps/MovieList'; //Filtering is compiled in MovieList
import AddMovie from './Comps/Add';
import MovieRoute from './Comps/MovieRoute';



import "./Home.css"
import p1 from "./Posters/Assassin.jpg"
import p2 from "./Posters/Butterfly man.jpg"
import p3 from "./Posters/Jaws.jpg"
import p4 from "./Posters/Joker.jpg"
import p5 from "./Posters/Jordan Peter.jpg"
import p6 from "./Posters/Lamb.jpg"
import p7 from "./Posters/Moonlight.jpg"
import p8 from "./Posters/Polis.jpg"
import p9 from "./Posters/Spree.jpg"

function App() {
  // DATA STATES
  ////////////////////////////////////// 
  const [Films, setFilms] = useState([
    {
      id:  1,
      poster: p1,
      name: "Assassin",
      rating: 4,
    },
    {
      id:  2,
      poster: p2,
      name: "Butterfly man",
      rating: 2,
    },
    {
      id:  3,
      poster: p3,
      name: "Jaws",
      rating: 5,
    },
    {
      id: 4,
      poster: p4,
      name: "Joker",
      rating: 5,
    },
    {
      id:  5,
      poster: p5,
      name: "Jordan Peter",
      rating: 4,
    },
    {
      id:  6,
      poster: p6,
      name: "Lamb",
      rating: 3,
    },
    {
      id:  7,
      poster: p7,
      name: "Moonlight",
      rating: 1,
    },
    {
      id : 8,
      poster : p8,
      name: "Polis",
      rating : 4
    },
    {
      id : 9,
      poster : p9,
      name: "Spree",
      rating : 4
    }
  ]);
  ////////////////////////////////////// 


// STATES
/////////////////////////////////////////////////////////////////////////
  const[Input,setInput] = useState ("");

  const[Rating, setRating] = useState(0);
/////////////////////////////////////////////////////////////////////////

//FUNCTIONS
/////////////////////////////////////////////////////////////////////////
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const [show, setModalShow] = useState(false);
  
  const[newMovie, setNewMovie] = useState({
    id: Math.random(),
    poster:"",
    name:"",
    rating: 0,
  });

  const handleMovie = () => {
    setModalShow(!show);
  };


  const addMovie = () => {
    if(newMovie.rating>=1 && newMovie.rating<=5){
      setFilms([...Films,newMovie])
      handleMovie ()
    }
  }

  const handleAddMovie = (e) => {
    if (e.target.name === "rating") {
    setNewMovie({ ...newMovie, [e.target.name]: +e.target.value});
  } else {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value});
  }
  }

/////////////////////////////////////////////////////////////////////////
  return (

    <div className="App">
      <div className="App-content">
        <NavBar Input={Input} handleInput={handleInput} Rating={Rating} handleRating={handleRating} handleMovie={handleMovie} />
        <MovieList Films={Films} Input={Input} Rating={Rating} />
        <AddMovie show={show} onHide={() => setModalShow(false)} handleRating={handleRating} handleMovie={handleMovie} newMovie={newMovie} handleAddMovie={handleAddMovie} addMovie={addMovie}/>
<Routes>
<Route path="/Movies/MovieRoute/:id" element={<MovieRoute Films={Films} />}/> 
</Routes>

      </div>
    </div>

  );
}
export default App;
