import React from "react";
import ModalAudio from "./ModalAudio";
import ModalSettings from "./ModalSettings";

const Settings = ({ restartFunc }) => {
  const makeFullScreen = () => {
    document.querySelector('.game-area').requestFullscreen(); // отобразить страницу в полноэкранном режиме
  }
  const openAudioSettings = () => {

  }


  return (
    <>
      <div className="nav-wrapper">
        <ul className="left settings-left">
          <li><button data-target="modal1" onClick={openAudioSettings} className="btn btn-icon modal-trigger"><i className="material-icons">music_note</i></button></li>
          <li><button className="btn btn-icon" onClick={restartFunc}><i className="material-icons">autorenew</i></button></li>
          <li><button data-target="modal2" className="btn btn-icon"><i className="material-icons">burst_mode</i></button></li>
        </ul>

        <button onClick={makeFullScreen} className="btn right btn-icon"><i className="material-icons">fullscreen</i></button>

      </div>

      <ModalAudio/>

    </>
  )
};

export default Settings;
