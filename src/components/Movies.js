import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const listMovies = () => {
    return movies.map(movie => {
    return( 
    <div>
      { movie.title }
      { movie.time }
      { movie.genres.map(genre => <ul>{ genre }</ul>) }
    </div>
      )
    })
  }
  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies()}
    </div>
  );
};

export default Movies;
