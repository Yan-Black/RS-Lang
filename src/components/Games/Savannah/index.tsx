import * as React from 'react';
import MainScreen from './mainScreen/mainScreen';
import GameScreen from './gameScreen/gameScreen';
import Cross from './cross/cross';
import LoadingScreen from './loadingScreen/loadingScreen';
import {setGameMode, setLoadingMode} from "../../../containers/Games/Savannah/actions";
import {Component} from "react";
import {connect} from "react-redux";
import ModalWindow from "./modalWindow/modalWindow";
import EndScreen from "./endScreen/endScreen";

class SavannahComponent extends Component {
  setMode = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { startGame } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    startGame();
    console.log(startGame);
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
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

const mapDispatchToPropsForButton = (dispatch) => ({
  startGame: () => {
    setGameMode(dispatch);
  },
});

const Savannah = connect(null, mapDispatchToPropsForButton)(SavannahComponent)

export default Savannah;
