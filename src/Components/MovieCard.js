import React from "react";
import logo from './Getlify.png';
import "./MovieCard.css"

const DEFAULT_PLACEHOLDER_IMAGE = {logo};
// some movies retrieved from the API do not have images, so we will render a placeholder image instead of a broken link.


const MovieCard = ({ movie }) => {
    const description = "Lorem ipsum ..."
    const rating = 5+"Stars";
    // () => {return (Math.floor(Math.random() * 10) + 1)}
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
     return (
            <header className="Movie-header">
            <img src={poster} className="Film-logo"  alt={`The movie titled: ${movie.Title}`} />
            <h3>
            {movie.Title}
            </h3>
            <p>
            {description}            
            </p>
            <a
            className="Film-link"
            href={movie.Url}
            target="_blank"
            rel="noopener noreferrer"
            >
            {movie.Title + ".com"}
            </a>
            <p>{rating}</p>
        </header>
    )
}
export default MovieCard