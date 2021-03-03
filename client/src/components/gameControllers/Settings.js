import React, {useCallback, useState} from "react";
import ModalAudio from "./Modals/ModalAudio";
import ModalSettings from "./Modals/ModalSettings";
import ModalRating from "./Modals/ModalRating";
import Modal from "./Modals/Modal";
import {useGlobalSettings} from "../../utils/contextProvider";


const Settings = ({ playAgain, score, openFullScreen}) => {
  const { setCards } = useGlobalSettings();
  const [isMusicSettingsOpen, setMusicSettingsOpen] = useState(false);
  const [isGameSettingsOpen, setGameSettingsOpen] = useState(false);
  const [isRatingSettingsOpen, setRatingSettingsOpen] = useState(false);

  const makeFullScreen = (() => {
    openFullScreen();
  });

  const toggleGameSettings = () => {
    setGameSettingsOpen(p => !p);
  }

  const toggleMusicSettings = () => {
    setMusicSettingsOpen(p => !p);
  }
  const toggleRatingSettings = () => {
    setRatingSettingsOpen(p => !p);
  }

  const handlePlayAgain = () => {
    setCards([]);
    playAgain();
  }


  return (
    <>
      <div className="nav-wrapper">
        <ul className="left settings-left">
          <li>
            <button onClick={toggleMusicSettings}
                    className="btn btn-icon"
            >
              <i className="material-icons">music_note</i>Музыка и звуки</button>
          </li>
          <li>
            <button onClick={toggleGameSettings}
                      className="btn btn-icon"
            >
              <i className="material-icons">settings</i>Настройки
            </button>
          </li>
          <li><button onClick={toggleRatingSettings} className="btn btn-icon modal-trigger"><i className="material-icons">grade</i>Рейтинг</button></li>
        </ul>
        <ul className="right settings-left">
          <li>
            <button className="btn btn-icon"
                    onClick={playAgain}>
              <i className="material-icons">autorenew</i>Заново
            </button>
          </li>
          <li>
            <button className="btn right btn-icon"
                    onClick={makeFullScreen}>
            <i className="material-icons">fullscreen</i>Во весь экран
            </button>
          </li>
        </ul>

      </div>
      { isMusicSettingsOpen ? <Modal onClose={toggleMusicSettings} bottom={true}><ModalAudio/></Modal> : null }
      { isGameSettingsOpen ? <Modal onClose={toggleGameSettings}> <ModalSettings playAgain={playAgain}/> </Modal> : null }
      { isRatingSettingsOpen ? <Modal onClose={toggleRatingSettings}> <ModalRating score={score}/> </Modal> : null }
    </>
  )
};

export default Settings;
