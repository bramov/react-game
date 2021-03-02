import React from "react";
import ModalAudio from "./Modals/ModalAudio";
import ModalSettings from "./Modals/ModalSettings";
import ModalRating from "./Modals/ModalRating";

const Settings = ({ restartFunc, changeCards, changeRegime, amount, regime, score }) => {
  const makeFullScreen = () => {
    document.querySelector('.game-area').requestFullscreen(); // отобразить страницу в полноэкранном режиме
  }


  return (
    <>
      <div className="nav-wrapper">
        <ul className="left settings-left">
          <li><button data-target="modal1" className="btn btn-icon modal-trigger"><i className="material-icons">music_note</i>Музыка и звуки</button></li>
          <li><button data-target="modal2" className="btn btn-icon modal-trigger"><i className="material-icons">settings</i>Настройки</button></li>
          <li><button data-target="modal3" className="btn btn-icon modal-trigger"><i className="material-icons">grade</i>Рейтинг</button></li>
        </ul>
        <ul className="right settings-left">
          <li><button className="btn btn-icon" onClick={restartFunc}><i className="material-icons">autorenew</i>Заново</button></li>
          <li><button onClick={makeFullScreen} className="btn right btn-icon"><i className="material-icons">fullscreen</i>Во весь экран</button></li>
        </ul>

      </div>

      <ModalAudio/>
      <ModalRating score={score}/>
      <ModalSettings changeCards={changeCards}
                     changeRegime={changeRegime}
                     amount={amount}
                     regime={regime}
      />

    </>
  )
};

export default Settings;
