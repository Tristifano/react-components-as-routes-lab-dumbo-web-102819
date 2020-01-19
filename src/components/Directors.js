import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const listDirectors = () => {
    return directors.map(director => {
    return( 
    <div>
      { director.name }
      {director.movies.map(movie => <ul>{ movie }</ul>)}
    </div>
      )
    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors()}
    </div>
  );
}

export default Directors
