import * as React from 'react';
import './index.scss';

import BodyCarousel from './carousel';
import AboutUs from './aboutUs';
import AboutApp from './aboutApp';

const Body: React.FC = () => (
  <div>
    <BodyCarousel />
    <AboutApp />
    <AboutUs />
  </div>

);

export default Body;
