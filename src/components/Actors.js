import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const listActors = () => {
    return actors.map(actor => {
    return( 
    <div>
      { actor.name }
      {actor.movies.map(movie => <ul>{ movie }</ul>)}
    </div>
      )
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {listActors()}
    </div>
  );
};

export default Actors;
