import React, {useEffect} from "react";
import M from "materialize-css";
import Table from "./Table";


const ModalRating = ({score}) => {

  useEffect( () => {
    M.AutoInit();
  }, []);
  return (
    <>
      <h4>Рейтинг</h4>
      <p>Ваш текущий счет: {score}</p>
      <p>Если Вы ввели свой игровой никнейм / имя после первой победы, то статистика будет обновляться для каждого из режимов.</p>
      <Table/>
    </>
  )
}

export default ModalRating;
