import React, {useEffect, useRef} from 'react';
import M from 'materialize-css';

const ModalSettings = () => {
  const myRef = useRef(null);
  useEffect(() => {
    //M.Modal.init(this.Modal);
  }, [])
  return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
        Modal
      </a>

      <div
        id="modal2"
        className="modal"
        // ref={M.Modal}
      >
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a className="modal-close waves-effect waves-red btn-flat">
            Disagree
          </a>
          <a className="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    </div>
  )
}

export default ModalSettings;
