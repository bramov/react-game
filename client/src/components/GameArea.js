import React, {useState} from 'react';
import GameScreen from "./gameControllers/GameScreen";
import ActionButton from "./gameControllers/ActionButton";
import useSound from "use-sound";
import backgroundMusic from "../audio/music.mp3";
import {useGlobalSettings} from "../utils/contextProvider";

const GameArea = () => {
  const { musicValue } = useGlobalSettings();
  const [isActive, setActive] = useState(false);
  const [playBackgroundMusic] = useSound(backgroundMusic, {volume: musicValue / 100});

  const startGame = () => {
    setActive(true);
    playBackgroundMusic();
  }
  return (
    <main>
      <div className="container game">
        { isActive ? <GameScreen/> : <ActionButton start={startGame}/>}
      </div>

    </main>
  )
}

export default GameArea;
