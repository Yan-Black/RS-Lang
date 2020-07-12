import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { closeModal } from 'containers/Main/actions';
import { State } from 'models';
import './index.scss';

const ModalMain: React.FC = () => {
  const dispatch = useDispatch();
  const modalInfo = useSelector((state: State) => state.mainModalInfo);
  const modalHandler = () => dispatch(closeModal());
  return (
    <div id={modalInfo.modalId} className="modal-main">
      <div className="modal-hint">
        <button
          type="button"
          className="modal-close-button"
          onClick={modalHandler}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="hint-title">{modalInfo.name}</div>
        <div className="hint-descr">{modalInfo.desc}</div>
      </div>
    </div>
  );
};

export default ModalMain;
