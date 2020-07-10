import * as React from 'react';
import { connect } from 'react-redux';
import './loadingScreen.scss';
import LoadingImg from './components/loadingImg/loadingImg';
import Tips from './components/tips/tips';

const LoadingScreenComponent = (props) => {
  const { mode } = props;
  if (mode === 'SETLOADINGMODE') {
    return (
      <div>
        <LoadingImg />
        <Tips />
      </div>
    );
  }
  return <div />;
};

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
});

const LoadingScreen = connect(mapStateToPropsForCounter, null)(LoadingScreenComponent);

export default LoadingScreen;
