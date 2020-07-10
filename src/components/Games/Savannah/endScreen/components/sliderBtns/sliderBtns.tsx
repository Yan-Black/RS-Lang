import * as React from 'react';
import { Component } from 'react';
import SliderBtn from './sliderBtn/sliderBtn';
import './sliderBtns.scss';

// eslint-disable-next-line react/prefer-stateless-function
class SliderBtns extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <div className="slider-btns">
        <SliderBtn />
        <SliderBtn />
      </div>
    );
  }
}

export default SliderBtns;
