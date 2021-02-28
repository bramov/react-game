import React, { useState, useEffect } from "react";
import Settings from "./Settings";
import Card from "./Card";
import {generateData, getData} from "../../utils";
import ModalFinished from "./ModalFinished";

const GameScreen = () => {
  const [current, setCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    playAgain();
  }, []);

  useEffect(() => {
    checkIfCardsSame();
  }, [current, previous]);

  const playAgain = () => {
    setScore(0);
    setFinished(false);
    getData('/loadData')
      .then(body => generateData(body))
      .then(data => setCards(data))
  }

  const checkIfGameEnded = () => {
    const allCardsOpen = cards.every(el => el.open);
    if (allCardsOpen) {
      setFinished(true);
    }
  }

  const checkIfCardsSame = () => {

    if (current && previous) {
      if (current.code === previous.code) {
        setCurrent(null);
        setPrevious(null);
        const updatedCards = cards
          .map(card => card.id === previous.id ||
            card.id === current.id ?
            ({...card, active: false}) : card
          )
        setCards(updatedCards);
        checkIfGameEnded();
        /*
        setTimeout(() => {

        }, 500);*/
      } else {
        closeTwoCards();
      }
    }

  }
  const closeTwoCards = () => {
    if (current && previous) {
      const updatedCards = cards
        .map(card =>
          card.open === true && card.active === true ?
          ({...card, open: false, active: true}) : card
        );

      setCurrent(null);
      setPrevious(null);
      setTimeout( () => {
        setCards(updatedCards);
      }, 500)

    }
  }
  const openCard = (clickedCard) => {
    if (!clickedCard.open) {
      setScore(score + 1);
      if (current) {
        setPrevious(current);
      }
      setCurrent(clickedCard);

      const updatedCards = cards
        .map(card =>
          card.id === clickedCard.id ?
          ({...card, open: true, active: true}) : card
        )
      setCards(updatedCards);
    }
  }

  return (
    <>
      <div className="game-area container">
        <h3 className="teal-text center">Clicks: <strong className="black-text">{score}</strong></h3>
          <div className="row cards-wrapper">

            { cards ? cards.map(el => <Card
                  {...el}
                  clickHandler={() => openCard(el)}
            />) : null }

          </div>
      </div>
      <div className="settings-area">
        <Settings restartFunc={playAgain}/>
      </div>

      { finished ? <ModalFinished playAgain={playAgain} score={score}/> : null}
    </>
  )
}

export default GameScreen;
