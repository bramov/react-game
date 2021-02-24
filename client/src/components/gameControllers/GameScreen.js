import React, {useState} from "react";
import Settings from "./Settings";
import Card from "./Card";

const GameScreen = () => {
  const [state, setState] = useState({
    open: [],
    current: [],
    score: 0,
  })
  const isCardSame = (el, prev) => el.type === prev.type;
  const shuffleArray = (arr) => arr.sort(() => Math.round(Math.random() * 100) - 50);
  const doubleAndShuffle = (arr) => shuffleArray([...arr, ...arr]);
  const testArr = [{type: '10C'}, {type: '10H'}, {type: 'AS'}, {type: 'KC'}, {type: 'QH'}];

  return (
    <>
      <div className="game-area container">
          <div className="row cards-wrapper">
            {doubleAndShuffle(testArr).map(el => <Card type={el.type}/>)}
          </div>

      </div>
      <div className="settings-area">
        <Settings/>
      </div>
    </>
  )
}

export default GameScreen;
