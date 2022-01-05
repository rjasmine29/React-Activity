import React, { useState } from 'react';

const PokemonCards = () => {

  const [pokemon, setPokemon] = useState([
    { name: 'Justin Timberlake', img: "https://i.scdn.co/image/ab67616d0000b273cb507b0d633356e681883c09", Song: 'Cry me a river', Year:'/2002', },
    { name: 'Dadju',  img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" },
    { name: 'Ludovico Einaudi', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" },
  ])


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
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  
 
  
  );

};

export default PokemonCards;