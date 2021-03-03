import React, { useState, useEffect, useCallback, useRef } from "react";
import Settings from "./Settings";
import Card from "./Card";
import {generateData, getData} from "../../utils/utils";
import ModalFinished from "./Modals/ModalFinished";
import victorySound from '../../../src/audio/victory.mp3';
import flipSound from '../../../src/audio/flip.mp3';
import sameSound from '../../../src/audio/sameCards.mp3';
import backgroundMusic from '../../../src/audio/music.mp3';
import useSound from "use-sound";
import Modal from "./Modals/Modal";

import {useGlobalSettings} from "../../utils/contextProvider";

const GameScreen = () => {
  const { musicValue, soundValue, regime, totalGames,
          amount, cards, setCards, setTotalGames,
          setBestEasy, setBestMiddle, setBestHard,
          bestEasy, bestMiddle, bestHard} = useGlobalSettings();
  const ref = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [current, setCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [score, setScore] = useState(Number(localStorage.getItem('score')) || 0);
  const [finished, setFinished] = useState(false);

  const [playFlipSound] = useSound(flipSound, {volume: soundValue / 100});
  const [playSameCardsSound] = useSound(sameSound, {volume: soundValue / 100});
  const [playVictorySound] = useSound(victorySound, {volume: soundValue / 100});

  const mounted = useRef(null);
  useEffect(() => {
    if (cards.length === 0) {
      playAgain();
    }
  })
  useEffect(() => {
    checkIfCardsSame();
  }, [current, previous]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      playAgain();
    }
  }, [amount, regime]);

  const openFullScreen = (el) => {
    el.current.requestFullscreen();
  }

  const playAgain = () => {
    setScore(0);
    setFinished(false);
    getData(`/loadData?amount=${amount}`)
      .then(body => generateData(body))
      .then(data => {
        setCards(data)
        localStorage.setItem('cards', JSON.stringify(data));
      })
  }
  const toggleFinished = () => {
    setFinished(false);
    playAgain();
  }
  const shouldUpdateCount = (target, mode) => {

    switch (mode) {
      case '10':
        if (!bestEasy) {
          setBestEasy(target);
          localStorage.setItem('bestEasy', target);
        } else if (target < Number(bestEasy)) {
          setBestEasy(target)
          localStorage.setItem('bestEasy', target);
        }
        break;
      case '20':
        if (!bestMiddle) {
          setBestMiddle(target);
          localStorage.setItem('bestMiddle', target);
        } else if (target < Number(bestMiddle)) {
          setBestMiddle(target)
          localStorage.setItem('bestMiddle', target);
        }
        break;
      case '30':
        if (!bestHard) {
          setBestHard(target);
          localStorage.setItem('bestHard', target);
        } else if (target < Number(bestHard)) {
          setBestHard(target)
          localStorage.setItem('bestHard', target);
        }
        break;
      default: break;
    }
  }
  const checkIfGameEnded = useCallback(() => {
    const allCardsOpen = cards.every(el => el.open);
    if (allCardsOpen) {
      playVictorySound();
      setFinished(true);
      shouldUpdateCount(score, amount);
      localStorage.setItem('totalGames', String(Number(totalGames) + 1));
      setTotalGames(Number(totalGames) + 1);
    }
  }, [cards]);

  const checkIfCardsSame = useCallback(() => {
    if (current && previous && (current.id !== previous.id) ) {
      if (current.code === previous.code) {
        setCurrent(null);
        setPrevious(null);
        const updatedCards = cards
          .map(card => card.id === previous.id ||
            card.id === current.id ?
            ({...card, active: false, won: true}) : card
          )
        setCards(updatedCards);
        playSameCardsSound();
        checkIfGameEnded();
        localStorage.setItem('cards', JSON.stringify(updatedCards));

      } else {
        closeTwoCards();
      }
    }
  }, [current, previous]);

  const closeTwoCards = useCallback(() => {
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
  }, [current])

  const openCard = useCallback((clickedCard) => {
    if (!clickedCard.open) {
      playFlipSound();
      setScore(score + 1);
      localStorage.setItem('score', String(score+1));
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
  }, [cards, playFlipSound])

  return (
    <>
      <div ref={ref} className="game-area">
        <h3 className="teal-text center">Счет: <strong className="black-text">{score}</strong></h3>
          <div className="row cards-wrapper">

            { cards ? cards.map(el => <Card
                  {...el}
                  tabindex={el.id}
                  regime={regime}
                  key={el.id}
                  selected={selectedCard}
                  clickHandler={() => openCard(el)}
            />) : null }

          </div>
      </div>
      <div className="settings-area">
        <Settings openFullScreen={() => openFullScreen(ref)}
                  playAgain={playAgain}
                  amount={amount}
                  regime={regime}
                  score={score}

        />
      </div>
      {
        finished ?
        <Modal onClose={toggleFinished}>
          <ModalFinished playAgain={playAgain}
                         amount={amount}
                         score={score}/></Modal> :
        null
      }
    </>
  )
}

export default GameScreen;
