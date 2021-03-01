import React from "react";
import M from "materialize-css";

class ModalFinished extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.updateRating = this.updateRating.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.restartGame = this.restartGame.bind(this);

  }
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    M.Modal.getInstance(this.Modal).open();

  }
  restartGame() {
    const instance = M.Modal.getInstance(this.Modal).close();
    this.props.playAgain();

  }
  handleInputChange(e) {
    this.setState({ name: e.target.value });
  }
  updateRating(e) {
    e.preventDefault();
    const data = {
      score: this.props.score,
      name: this.state.name
    }
    fetch('/updateData', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => alert(res));
  }

  render(props) {

    return (
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal3"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>Игра завершена</h4>
            <p>Ваш счет: {this.props.score} баллов</p>
            <p>Введите ваше имя / логин, чтобы обновить информацию о себе в статистике.</p>
            <form onSubmit={this.updateRating}>
              <div className="input-field">
                <input type="text"
                       className="validate"
                       id="name_field"
                       onChange={this.handleInputChange}
                       value={this.state.name}
                />
                <label htmlFor="name_field">Имя или логин</label>
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Подтвердить
                <i className="material-icons right">send</i>
              </button>
              <button className="btn waves-effect waves-light right"
                      type="submit"
                      onClick={this.restartGame}>
                Сыграть еще
                <i className="material-icons right">autorenew</i>
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              Закрыть
            </a>
          </div>
        </div>
    );
  }
}

export default ModalFinished;
