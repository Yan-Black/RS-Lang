import * as React from 'react';
import SliderBtn from './sliderBtn/sliderBtn';
import './sliderBtns.scss';

const SliderBtns: React.FC = () => (
  <div className="slider-btns">
    <SliderBtn />
    <SliderBtn />
  </div>
);

export default SliderBtns;
