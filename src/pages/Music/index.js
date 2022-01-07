//this page is the first page that should show up


import React, { useState } from "react";
import {TrainerCard, PokemonCards, StarButton} from '../../components';


const Music = () => {
  
    const [firstname, setFirstname] = useState("jas");

  
  
    return (
      <main>
    <h1>Music</h1>
    
    {/* <Switch>  */}
    
    {/* <About />
    <Home /> */}
    <TrainerCard name={firstname} welcome="welcome" />
    
    <StarButton />
    <PokemonCards name={firstname}  />   
    {/* <BackButton /> */}
    {/* </Switch> */}
    </main> 
 
 ) 

  
}

export default Music;
