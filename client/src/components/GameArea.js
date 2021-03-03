import React, {useState} from 'react';
import GameScreen from "./gameControllers/GameScreen";
import ActionButton from "./gameControllers/ActionButton";
import useSound from "use-sound";
import backgroundMusic from "../audio/music.mp3";
import {useGlobalSettings} from "../utils/contextProvider";

const GameArea = () => {
  const { musicValue, active, setActive } = useGlobalSettings();
  const [playBackgroundMusic, {stop, isPlaying}] = useSound(backgroundMusic, {volume: musicValue / 100});

  const startGame = () => {
    setActive(true);
    localStorage.setItem('active', 'true');
    playBackgroundMusic();
  }
  const stringToBoolean = (value) => {
    return (value === 'true' || value === true);
  }

  return (
    <main>
      <div className="container game">
        { stringToBoolean(active) ? <GameScreen/> : <ActionButton start={startGame}/>}
      </div>

    </main>
  )
}

export default GameArea;
