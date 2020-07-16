import * as React from 'react';
// import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
// import { eng, ru } from 'constants/audio-call-constants';
import { closeErrorModal } from 'containers/Main/actions';

function MainModal(): JSX.Element {
  const dispatch = useDispatch();
  // const lang = useSelector((state: State) => state.mainLang.lang);
  const title = useSelector((state: State) => state.mainErrorModal.title);
  const content = useSelector((state: State) => state.mainErrorModal.content);
  const isModalOpen = useSelector((state: State) => state.mainErrorModal.isOpen);

  const btnClickHandle = () => {
    dispatch(closeErrorModal());
  };

  return (
    <Modal show={isModalOpen} onHide={() => false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={btnClickHandle}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MainModal;
