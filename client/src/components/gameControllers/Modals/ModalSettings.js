import React, {useEffect} from 'react';
import {useGlobalSettings} from "../../../utils/contextProvider";
import M from "materialize-css";

const ModalSettings = ({playAgain}) => {
  const { regime, setRegime, amount, setAmount, setCards } = useGlobalSettings();
  useEffect(() => {
    M.AutoInit();
  }, []);

  const classicBack = '/assets/images/classic_back.png';
  const starwarsBack = '/assets/images/starwars_back.png';
  const programmerBack = '/assets/images/programmer_back.png';

  const changeRegimeValue = (e) => {
    setRegime(e.target.value);
    localStorage.setItem('regime', e.target.value);
    setCards([]);

  }
  const changeAmountValue = (e) => {
    setAmount(e.target.value);
    localStorage.setItem('amount', e.target.value);
    setCards([]);
  }
  return (
    <>
      <h4>Настройки игры</h4>
      <p className="center">Выберите режим (вид карточек)</p>
      <div className="input-field col s12 m6">
        <select value={regime} onChange={changeRegimeValue} className="icons">
          <option value="classic" data-icon={classicBack}>Классический</option>
          <option value="starwars" data-icon={starwarsBack}>Звездные войны</option>
          <option value="programmer" data-icon={programmerBack}>Айтишный</option>
        </select>
        <label>Выбор режима</label>
      </div>
      <p className="center">Выберите количество карточек</p>
      <div className="input-field col s12">
        <select value={amount} onChange={changeAmountValue}>
          <option value="10">Легкий</option>
          <option value="20">Средний</option>
          <option value="30">Сложный</option>
        </select>
        <label>Выбор сетки</label>
      </div>
    </>
  )
}

export default ModalSettings;

