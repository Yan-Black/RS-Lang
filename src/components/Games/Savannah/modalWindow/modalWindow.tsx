import * as React from 'react';
import { connect } from 'react-redux';
import './modalWindow.scss';
import InnerModal from './innerModal/innerModal';

const ModalWindowComponent = (props) => {
  const { modalWindow } = props;
  if (modalWindow) {
    return (
      <div className="modal-window">
        <InnerModal />
      </div>
    );
  }
  return <div />;
};

const mapStateToPropsForCounter = (state) => ({
  modalWindow: state.modalWindow,
});

const ModalWindow = connect(mapStateToPropsForCounter, null)(ModalWindowComponent);

export default ModalWindow;
