import React, {useEffect, useRef} from "react";
import M from "materialize-css";
import Table from "./Table";


const ModalRating = ({score}) => {
  const modalRef = useRef(null);
  useEffect( () => {
    if (modalRef.current) {
      const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
      };

      M.Modal.init(modalRef.current, options);
      M.AutoInit();
    }
    M.AutoInit();
  });
  return (
    <div
      ref={modalRef}
      id="modal3"
      className="modal"
    >
      <div className="modal-content">
        <h4>Рейтинг</h4>
        <p>Ваш текущий счет: {score}</p>
        <p>Если Вы ввели свой игровой никнейм / имя после первой победы, то статистика будет обновляться для каждого из режимов.</p>
        <Table/>
      </div>
      <div className="modal-footer">
        <a className="modal-close waves-effect waves-green btn-flat">
          Закрыть
        </a>
      </div>
    </div>
  )
}

export default ModalRating;
