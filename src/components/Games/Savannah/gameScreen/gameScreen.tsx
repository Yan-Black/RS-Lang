import * as React from 'react';
import { Component, Fragment } from 'react';
import LoadingImg from './components/loadingImg/loadingImg';
import Tips from './components/tips/tips';
import Sound from './components/sound/sound';
import HealthBar from './components/healthBar/healthBar';
import FallingWord from "./components/fallingWord/fallingWord";
import RawOfWords from "./components/rawOfWords/rawOfWords";
import Indicator from "./components/Indicator/Indicator";

// eslint-disable-next-line react/prefer-stateless-function
class GameScreen extends Component {
  render() {
    return (
      <>
        <LoadingImg/>
      </>
    );
  }
}

export default GameScreen;
