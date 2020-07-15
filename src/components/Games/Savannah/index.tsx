import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen/mainScreen';
import GameScreen from './GameScreen/gameScreen';
import CrossComponent from './Cross/cross';
import LoadingScreen from './LoadingScreen/loadingScreen';
import { openModalWindow, setGameMode, setLoadingMode } from '../../../containers/Games/Savannah/actions';
import ModalWindow from './ModalWindow/modalWindow';
import EndScreen from './EndScreen/endScreen';

class SavannahComponent extends Component {
  setMode = () => {
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
