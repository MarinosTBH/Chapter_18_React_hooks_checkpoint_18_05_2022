
import React from 'react'
import Movies from './MovieCard';
import {useState, useEffect} from 'react';

const MovieList = ({Films, Input, Rating}) => {
  const [FiltredFilms, setFiltredFilms]=useState(Films);

  useEffect(()=> {
    setFiltredFilms(Films.filter((film)=> film.name.toLowerCase().includes(Input.toLowerCase()) && Rating ===0 ? Films : film.rating === Rating ));
  }, [Input, Rating, Films]);
  return <Movies Films={FiltredFilms}/>;
};

export default MovieList;