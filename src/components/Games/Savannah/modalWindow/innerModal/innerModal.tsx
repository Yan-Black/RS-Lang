import * as React from 'react';
import WarningText from '../warningText/warningText';
import TipText from '../tipText/tipText';
import EndButton from '../endButton/endButton';
import CloseModalWindowButtons from '../closeModalWindowButton/closeModalWindowButton';
import './innerModal.scss';
import ModalCross from '../modalCross/modalCross';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const InnerModal = () => (
  <div className="modal-wrapper">
    <div className="inner-modal">
      <ModalCross />
      <WarningText />
      <TipText />
      <EndButton />
      <CloseModalWindowButtons />
    </div>
  </div>
);

export default InnerModal;
