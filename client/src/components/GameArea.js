import React, {useState, useEffect} from 'react';
import GameScreen from "./gameControllers/GameScreen";
import ActionButton from "./gameControllers/ActionButton";
import sound from "../audio/music.mp3";


const GameArea = () => {
  const [data, setData] = useState(null);
  const [isActive, setActive] = useState(Boolean(localStorage.getItem('active')) || false);


  useEffect(() => {
    startMusic();
  })
  /* try to change later, not a 3rd party code */
  const startMusic = () => {
    const musicPlayer = document.getElementById('music');
    musicPlayer.volume = 0;
    musicPlayer.play();
  }

  const startGame = () => {
    setActive(true);
    localStorage.setItem('active', 'true');
  }
  return (
    <main>
      <div className="container game">
        { isActive ? <GameScreen/> : <ActionButton start={startGame}/>}
      </div>
      <audio id="music" controls loop>
        <source src={sound} type="audio/mpeg"/>
      </audio>
    </main>
  )
}

export default GameArea;
