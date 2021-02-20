import React, {useState} from 'react';
import GameScreen from "./gameControllers/GameScreen";
import ActionButton from "./gameControllers/ActionButton";

const GameArea = () => {
  const [isActive, setActive] = useState(false);
  /*for instance, there will be 3 mode - 6 x 2, 6 x 3, 6x 4*/
  const startGame = () => {
    setActive(true);
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
