import * as React from 'react';
import { Component } from 'react';
import './cross.scss';
import { connect } from 'react-redux';
import { openModalWindow } from '../../../../containers/Games/Savannah/actions';

class CrossComponent extends Component {
  crossHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { modalWindow } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    modalWindow();
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { mode } = this.props;
    if (mode !== 'SETENDMODE') {
      return (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className="cross" onClick={this.crossHandler} />
      );
    }
    return <div />;
  }
}

const mapDispatchToPropsForButton = (dispatch) => ({
  modalWindow: () => {
    openModalWindow(dispatch);
  },
});

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
});

const Cross = connect(mapStateToPropsForCounter, mapDispatchToPropsForButton)(CrossComponent);

export default Cross;
