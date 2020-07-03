import * as React from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
// import { modalReducer } from 'containers/Games/AudioCall/reducer';
import { toggleModal, startPage, resetGame } from 'containers/Games/AudioCall/actions';
import { Link } from 'react-router-dom';
// import { statisticReducer } from 'containers/Games/AudioCall/reducer';
// import { useState } from 'react';

function ModalMessage(): JSX.Element {
  // const { isOpen } = props;
  // const [isShow, setIsShow] = useState(isOpen);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: State) => state.audioCallModal.isOpen);
  const messageTitle = useSelector((state: State) => state.audioCallModal.title);
  const messageBody = useSelector((state: State) => state.audioCallModal.message);
  // let messageTitle = '';
  // let messageBody = '';

  // switch (props.message) {
  //   case 'exit':
  //     messageTitle = 'Вы уверены? Тренировка не закончена!';
  //     messageBody = 'Если вы выйдете из игры, ваш прогресс не будет сохранен';
  //     break;
  //   case 'error':
  //     messageTitle = 'Ой! Ошибка!';
  //     messageBody = 'Что-то пошло не так. Попробуйте, пожалуйста позже';
  //     break;
  //   default:
  //     break;
  // }

  const stayBtnClickHandler = () => dispatch(toggleModal(null));
  // eslint-disable-next-line max-len
  const exitBtnClickHandler = () => { dispatch(toggleModal(null)); dispatch(resetGame()); dispatch(startPage()); };

  const stayKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(toggleModal(null));
    }
  };

  const exitKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(toggleModal(null));
      dispatch(resetGame());
      dispatch(startPage());
    }
  };

  if (isOpen === false) {
    return null;
  }

  return (
    <div id="audio-call-modal">
      <div className="modal-dialog audio-call-modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark font-weight-bold" id="modalLabel">{messageTitle}</h5>
            <button type="button" className="close" onClick={stayBtnClickHandler} onKeyPress={stayKeyPressHandler}>
              <span role="button">&times;</span>
            </button>
          </div>
          <div className="modal-body text-secondary">
            {messageBody}
          </div>
          <div className="modal-footer">
            <Link to="/Main" onClick={exitBtnClickHandler} onKeyPress={exitKeyPressHandler}>
              <button tabIndex={-1} type="button" className="btn btn-secondary">Да, уйти</button>
            </Link>
            <button type="button" className="btn btn-primary" onClick={stayBtnClickHandler} onKeyPress={stayKeyPressHandler}>Нет, я продолжу</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMessage;
