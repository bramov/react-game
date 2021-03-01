import React, {useEffect, useRef} from "react";
import M from "materialize-css";

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
      <div ref={Modal => {
        this.Modal = Modal;
      }}
           id="modal1" className="modal bottom-sheet">
        <div className="modal-content">
          <h4>Настройка звука</h4>
          <p>Музыка:</p>

            <p className="range-field">
              <input type="range"
                     min="0"
                     max="100"
                     step="5"
                     defaultValue={this.state.musicVolume}
                     onChange={this.changeMusicVolume}
              />
            </p>
          <p>Звуки:</p>

          <p className="range-field">
            <input type="range"
                   min="0"
                   max="100"
                   step="5"
                   defaultValue={this.state.soundVolume}
                   onChange={this.changeSoundVolume}
            />
          </p>



        </div>
        <div className="modal-footer">
          <button className="btn modal-close waves-effect waves-green btn-flat">Закрыть</button>
        </div>
      </div>
    )
  }
}
/*
const ModalAudio = () => {
  const ModalWindow = useRef(null);
  useEffect(() => {
    M.Modal.init(ModalWindow);
  })
  return (
    <div ref={ModalWindow}
         id="modal1" className="modal bottom-sheet">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#" className="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  )
}

*/

export default ModalAudio;
