import React from "react";
import {useGlobalSettings} from "../../../utils/contextProvider";

const ModalAudio = () => {

  const { musicValue, setMusicValue, soundValue, setSoundValue } = useGlobalSettings();

  const changeMusicVolume = (e) => {
    setMusicValue(e.target.value);
    localStorage.setItem('musicValue', e.target.value)
  }
  const changeSoundVolume = (e) => {
    setSoundValue(e.target.value);
    localStorage.setItem('soundValue', e.target.value);
  }
  return (
    <>
        <h4>Настройки музыки и звуков</h4>
        <p>Музыка:</p>
        <p className="range-field">
          <input type="range"
                 min="0"
                 max="100"
                 step="5"
                 value={musicValue}
                 onChange={changeMusicVolume}

          />
        </p>
        <p>Звуки:</p>
        <p className="range-field">
          <input type="range"
                 min="0"
                 max="100"
                 step="5"
                 value={soundValue}
                 onChange={changeSoundVolume}
          />
        </p>
    </>

  )
}

export default ModalAudio;
