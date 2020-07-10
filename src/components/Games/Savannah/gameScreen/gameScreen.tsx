import * as React from 'react';
import { connect } from 'react-redux';
import Sound from './components/sound/sound';
import HealthBar from './components/healthBar/healthBar';
import RawOfWordsComponent1 from './components/rawOfWords/rawOfWords';
import Indicator from './components/Indicator/Indicator';

const GameScreenComponent = (props) => {
  const { mode } = props;
  if (mode === 'SETGAMEMODE') {
    return (
      <>
        <HealthBar />
        <Sound />
        <RawOfWordsComponent1 />
        <Indicator />
      </>
    );
  }
  return <div />;
};

// eslint-disable-next-line react/prefer-stateless-function
const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
});

const GameScreen = connect(mapStateToPropsForCounter, null)(GameScreenComponent);

export default GameScreen;
