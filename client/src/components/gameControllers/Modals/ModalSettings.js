import React, {useEffect, useRef} from 'react';
import M from 'materialize-css';

class ModalSettings extends React.Component {
  constructor(props) {
    super(props);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleRegimeChange = this.handleRegimeChange.bind(this);

    this.classicBack = '/assets/images/classic_back.png';
    this.starwarsBack = '/assets/images/starwars_back.png';
    this.programmerBack = '/assets/images/programmer_back.png';

    this.state = {
      amount: props.amount,
      regime: props.regime
    }
  }
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "1%",
      endingTop: "1%"
    };
    M.Modal.init(this.Modal, options);
    M.AutoInit();
  }
  handleRegimeChange(e) {
    this.setState({...this.state, regime: e.target.value})
    this.props.changeRegime(e.target.value);
  }
  handleAmountChange(e) {
    this.setState({...this.state, amount: e.target.value});
    this.props.changeCards(e.target.value);
  }
  render() {
    return (
        <div ref={Modal => {
          this.Modal = Modal;
        }}
          id="modal2"
          className="modal"
        >
          <div className="modal-content">
            <h4>Настройки игры</h4>

            <p className="center">Выберите режим (вид карточек)</p>
            <div className="input-field col s12 m6">
              <select value={this.state.regime} onChange={this.handleRegimeChange} className="icons">
                <option value="classic" data-icon={this.classicBack}>Классический</option>
                <option value="starwars" data-icon={this.starwarsBack}>Звездные войны</option>
                <option value="programmer" data-icon={this.programmerBack}>Айтишный</option>
              </select>
              <label>Выбор режима</label>
            </div>
            <p className="center">Выберите количество карточек</p>
            <div className="input-field col s12">
              <select value={this.state.amount} onChange={this.handleAmountChange}>
                <option value="10">Легкий</option>
                <option value="20">Средний</option>
                <option value="30">Сложный</option>
              </select>
              <label>Выбор сетки</label>
            </div>

          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              Закрыть
            </a>
          </div>
        </div>
    )
  }
}

export default ModalSettings;
