import React, { useState } from 'react';
import { render } from 'react-dom';

const PokemonCards = () => {

  const [pokemon, setPokemon] = useState([
    { id: 2, name: 'Justin Timberlake', img: "https://i.scdn.co/image/ab67616d0000b273cb507b0d633356e681883c09", Song: 'Cry me a river', Year:'/2002', },
    { name: 'Dadju',  img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" },
    { name: 'Ludovico Einaudi', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" },
  ])

  //star button for all three artists (- not working)
  // const [ chosenSong, setChosenSong ] = useState();

  // const handleStorySelect = songId => {
  //   const chosenSong = pokemon.find(st => st.id === songId);
  //   setChosenSong(chosenSong);
  // };

  // // Pass explicit arguments to event handlers
  // const renderSongs = () => pokemon.map(st => <li key={st.id} onClick={() => handleStorySelect(st.id)}><StarButton /> <strong role="heading" aria-label="name">{st.name}</strong> </li>)
  
//remember this order will show up on table
  const renderRows = () => {
    return pokemon.map(p => <tr><td>{p.name}</td><td>{p.Song}</td>  <td><img src={p.img}/></td> <td>{p.Year}</td> </tr>)
  
  }

  return (
    
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center", fontSize: "14pt"}}>
     {/* Reading from state */}
  <thead>
    
        <tr>
          <th>Name</th>
          <th>Song</th>
          <th>Album Cover</th>
          <th>Release Date</th>
          <th>Star </th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  
 
  
  );

};

export default PokemonCards;