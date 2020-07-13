import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from './mainScreen/mainScreen';
import GameScreen from './gameScreen/gameScreen';
import CrossComponent from './Cross/cross';
import LoadingScreen from './loadingScreen/loadingScreen';
import { openModalWindow, setGameMode, setLoadingMode } from '../../../containers/Games/Savannah/actions';
import ModalWindow from './modalWindow/modalWindow';
import EndScreen from './endScreen/endScreen';

class SavannahComponent extends Component {
  setMode = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { startGame } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    startGame();
    console.log(startGame);
  };

  // eslint-disable-next-line max-len
  render() {
    return (
      <div onAnimationEnd={this.setMode}>
        <Cross />
        <MainScreen />
        <GameScreen />
        <LoadingScreen />
        <ModalWindow />
        <EndScreen />
      </div>
    );
  }
}

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
});

const mapDispatchToPropsForButton = (dispatch) => ({
  startGame: () => {
    setGameMode(dispatch);
  },
  modalWindow: () => {
    openModalWindow(dispatch);
  },
});

const Cross = connect(mapStateToPropsForCounter, mapDispatchToPropsForButton)(CrossComponent);

const Savannah = connect(null, mapDispatchToPropsForButton)(SavannahComponent);

export default Savannah;
