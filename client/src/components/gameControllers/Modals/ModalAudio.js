import React from "react";
import {useGlobalSettings} from "../../../utils/contextProvider";

const ModalAudio = () => {

  const { musicValue, setMusicValue, soundValue, setSoundValue } = useGlobalSettings();

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
                 onChange={(e) => setMusicValue(e.target.value)}

          />
        </p>
        <p>Звуки:</p>
        <p className="range-field">
          <input type="range"
                 min="0"
                 max="100"
                 step="5"
                 value={soundValue}
                 onChange={(e) => setSoundValue(e.target.value)}
          />
        </p>
    </>

  )
}

export default ModalAudio;
