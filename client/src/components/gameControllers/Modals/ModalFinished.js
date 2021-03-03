import React, {useState, useEffect, useRef} from "react";
import M from "materialize-css";
import {useGlobalSettings} from "../../../utils/contextProvider";



const ModalFinished = ({playAgain, score, amount}) => {
  const { setCards } = useGlobalSettings();
  const [name, setName] = useState('');
  const [updated, setUpdated] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const showUpdated = (res) => {
    if (res.message) {
      setUpdated(true);
      setTimeout(() => {
        restartGame();
      }, 1000);
    }
  }

  const restartGame = () => {
    setCards(null);
    playAgain();
  }

  const updateRating = async (e) => {
    e.preventDefault();
    setDisabledBtn(true);
    const data = {
      score: score,
      name: name,
      amount: amount,
    }
    const response = await fetch('/updateData', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await response.json();
    showUpdated(res);
  }

  return (
    <>
      <h4>Игра завершена</h4>
      <p>Ваш счет: {score} баллов</p>
      <p>Введите ваше имя / логин, чтобы обновить информацию о себе в статистике.</p>
      <form onSubmit={updateRating}>
        <div className="input-field">
          <input type="text"
                 className="validate"
                 id="name_field"
                 onChange={handleInputChange}
                 value={name}
                 disabled={disabledBtn}
          />
          <label htmlFor="name_field">Имя или логин</label>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">
          Подтвердить
          <i className="material-icons right">send</i>
        </button>
        <button className="btn waves-effect waves-light right"
                type="submit"
                onClick={restartGame}
        >
          Сыграть еще
          <i className="material-icons right">autorenew</i>
        </button>
      </form>
    </>
  )
}

export default ModalFinished;
