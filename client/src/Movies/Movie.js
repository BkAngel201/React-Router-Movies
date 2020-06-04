import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${props.match.params.movieId}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <MovieCard movie={movie} addToSavedList={props.addToSavedList}/>
  );
}

export default Movie;
