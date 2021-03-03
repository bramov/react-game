import React, {useRef} from "react";
import useCreatePortalInBody from "../../../utils/useCreatePortalInBody";
import useClickOutside from "../../../utils/useClickOutside";


const Modal = ({children, onClose, bottom = false}) => {
  const createBodyPortal = useCreatePortalInBody();
  const ref = useRef();
  useClickOutside(ref, onClose);

  return createBodyPortal(
    <div className="modal-overlay">
      <div className={`modal modal-body ${bottom ? 'bottom-sheet': null}`}>
        <div className="container">
          <div ref={ref} className="modal-content">
            {children}
          </div>
          <div className="modal-footer">
            <button onClick={onClose} className="modal-close waves-effect waves-green btn-flat modal-close">Закрыть</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Modal;
