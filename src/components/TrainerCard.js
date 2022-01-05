import React, { useState } from 'react';
//  import FaveButton from './components/FaveButton';
// import './App.css';

const TrainerCard = () => {
  
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
    
    <div>
      <h2>{artistName}</h2>
      <h3>Justin Timberlake</h3>
      <p> <span role="figure" id="reads">{firstLikeCount} <button onClick={increaseFirstCount}  /></span> like(s)!</p>

      <h3>Dadju</h3>
      <p><span role="figure" id="reads">{secondLikeCount} <button onClick={increaseSecondCount} /></span> like(s)!</p>

      <h3>Ludovico Einaudi</h3>
      <p><span role="figure" id="reads">{thirdLikeCount} <button onClick={increaseThirdCount} /></span> like(s)!</p>

      <aside>
        {/* Conditional rendering example 1 */}
        <h3 aria-label="greeting" id="greeting">Hi there, {username ? username : 'friend'}!</h3> </aside>
      <form onSubmit={handleFormSubmit}>
          <label name="username">Username</label>
          <input type="text" id="username" name="username" placeholder="That's not my name!" value={nameInput} onChange={handleInput}/>
          <input type="submit" value="Update!"/>
        </form>
    </div>
  );
 
}


export default TrainerCard;