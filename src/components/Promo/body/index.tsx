import * as React from 'react';
import './index.scss';
import devData from '../config/config';

import BodyCarousel from './carousel';
import AboutUs from './aboutUs';
import AboutApp from './aboutApp';

const Body: React.FC = () => (
  <div>
    <BodyCarousel />
    <AboutApp aboutGames={devData.aboutGames} />
    <AboutUs aboutUs={devData.aboutUs} />
  </div>
);

export default Body;
