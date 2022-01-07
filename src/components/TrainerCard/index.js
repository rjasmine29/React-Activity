import React, { useState } from 'react';

//props is passed here from parent 
const TrainerCard = (props) => {
  
  const [ username, setUsername ] = useState("");
  const [ nameInput, setNameInput ] = useState("");
  const [ firstLikeCount, setFirstCount ] = useState(2);  //JT
  const [ secondLikeCount, setSecondCount] = useState(1); //Dadju
  const [ thirdLikeCount, setThirdCount ] = useState(5)   //LE
  const [ artistName, setArtistName ] = useState('Artist');

 
  //const increaseLikeCount = () => setLikeCount(likeCount + 1)
  const increaseFirstCount = () => setFirstCount(prevState => prevState + 1);
  const increaseSecondCount = () => setSecondCount(prevState => prevState + 1);
  const increaseThirdCount = () => setThirdCount(prevState => prevState + 1);

  //regular form not controlled form
  const handleInput = e => {
    setNameInput(e.target.value)
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setUsername(nameInput);
    setNameInput("");
  };


  return (
    //props is used here from App.js
    <div>  
        <p>hello name is {props.name} and {props.welcome}</p>     
      <h2>{artistName}</h2>
      <h3>Justin Timberlake</h3>
      <p> Member of NSYNC </p>
      <p> Music type: R&B, Pop, Funk </p>
      <p> <span role="figure" id="reads">{firstLikeCount} <button onClick={increaseFirstCount}> + </button> </span> like(s)!</p>

      <h3>Dadju</h3>
      <p> A french singer </p>
      <p> Music type: Soul, R&B </p>
      <p><span role="figure" id="reads">{secondLikeCount} <button onClick={increaseSecondCount} > + </button> </span> like(s)!</p>

      <h3>Ludovico Einaudi</h3>
      <p> An Italian Pianist and Composer.</p>
      <p> Music type: Classical </p>
      <p><span role="figure" id="reads">{thirdLikeCount} <button onClick={increaseThirdCount} /></span> like(s)!</p>
    
      <aside>
        {/* Conditional rendering example 1 */}
        <h3 aria-label="greeting" id="greeting">Hi there, {username ? username : 'user'}!</h3> </aside>
      <form onSubmit={handleFormSubmit}>
          <label name="username">Username</label>
          <input type="text" id="username" name="username" placeholder="That's not my name!" value={nameInput} onChange={handleInput}/>
          <input type="submit" value="Update!"/>
        </form>
    </div>
  );
 
}


export default TrainerCard;