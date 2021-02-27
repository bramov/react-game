import React, { useState, useEffect } from "react";
import Settings from "./Settings";
import Card from "./Card";

const GameScreen = () => {
  const [current, setCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [cards, setCards] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    checkIfCardsSame();

  }, [current, previous]);

  useEffect(() => {
    const shouldBe = [
      {
        code: '10C',
        id: null,
        open: false,
        active: true
      },
      {
        code: '10H',
        id: null,
        open: false,
        active: true
      },
      {
        code: 'AS',
        id: null,
        open: false,
        active: true
      },
      {
        code: 'KC',
        id: null,
        open: false,
        active: true
      },
      {
        code: 'QH',
        id: null,
        open: false,
        active: true
      }
    ]
    let test = [...shouldBe, ...shouldBe];
    const shuffleArray = (arr) => arr.sort(() => Math.round(Math.random() * 100) - 50);
    test = test.map((el, i) => ({...el, id: i}))
    const testArray = shuffleArray(test);
    setCards(testArray);

  }, []);

  const playAgain = () => {
    const shouldBe = [
      {
        code: '10C',
        id: null,
        open: false,
        active: true
      },
      {
        code: '10H',
        id: null,
        open: false,
        active: true
      },
      {
        code: 'AS',
        id: null,
        open: false,
        active: true
      },
      {
        code: 'KC',
        id: null,
        open: false,
        active: true
      },
      {
        code: 'QH',
        id: null,
        open: false,
        active: true
      }
    ]
    let test = [...shouldBe, ...shouldBe];
    const shuffleArray = (arr) => arr.sort(() => Math.round(Math.random() * 100) - 50);
    test = test.map((el, i) => ({...el, id: i}))
    const testArray = shuffleArray(test);
    setCards(testArray);
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
        setTimeout(() => {
          setCards(updatedCards);
        }, 500);
      } else {
        closeTwoCards();
      }
      console.log(cards);
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
          <div className="row cards-wrapper">

            { cards.map(el => <Card
                  {...el}
                  clickHandler={() => openCard(el)}
            />) }

          </div>
      </div>
      <div className="settings-area">
        <Settings restartFunc={playAgain}/>
      </div>
    </>
  )
}

export default GameScreen;
