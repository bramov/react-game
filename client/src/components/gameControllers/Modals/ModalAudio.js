import React, {useEffect, useRef, useState} from "react";
import M from "materialize-css";
import useSound from 'use-sound';
import audioSrc from '../../../../src/audio/music.mp3';

const ModalAudio = () => {
  const modalRef = useRef(null);
  const [soundsVolume, setSoundsVolume] = useState(50);
  const [musicVolume, setMusicVolume] = useState(50);
  useEffect( () => {
    if (modalRef.current) {
      M.Modal.init(modalRef.current);
    }
  }, [modalRef.current])
  const changeMusicVolume = (e) => {
    setMusicVolume(e.target.value)
    //musicPlayer.volume = e.target.value / 100;
  }
  const changeSoundsVolume = (e) => {
    setSoundsVolume(e.target.volume);

  }

  return (
    <div ref={modalRef}
         id="modal1"
         className="modal bottom-sheet"
    >
      <div className="modal-content">
        <h4>Настройка звука</h4>
        <p>Музыка:</p>

        <p className="range-field">
          <input type="range"
                 min="0"
                 max="100"
                 step="5"
                 defaultValue={musicVolume}
                 onChange={changeMusicVolume}
          />
        </p>
        <p>Звуки:</p>

        <p className="range-field">
          <input type="range"
                 min="0"
                 max="100"
                 step="5"
                 defaultValue={soundsVolume}
                 onChange={changeSoundsVolume}
          />
        </p>



      </div>
      <div className="modal-footer">
        <button className="btn modal-close waves-effect waves-green btn-flat">Закрыть</button>
      </div>
    </div>
  )
}
/*

class ModalAudio extends React.Component {
  constructor() {
    super();
    this.state = {
      soundVolume: 50,
      musicVolume: 0
    };
    this.changeSoundVolume = this.changeSoundVolume.bind(this);
    this.changeMusicVolume = this.changeMusicVolume.bind(this);
  }
  changeMusicVolume(event) {
    this.setState({...this.state, [this.state.musicVolume]: event.target.value});
    const musicPlayer = document.getElementById('music');
    musicPlayer.volume = event.target.value / 100;
  }
  changeSoundVolume(event) {
    this.setState({...this.state, [this.state.soundVolume]: event.target.value});
    console.log(this.state.soundVolume);
  }

  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
    return (

    )
  }
}


*/

export default ModalAudio;
