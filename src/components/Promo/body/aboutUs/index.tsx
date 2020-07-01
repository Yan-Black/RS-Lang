import * as React from 'react';
import './index.scss';
import CardContainer from './cardContainer';
import AboutUsText from './aboutUsDescription';

const AboutUs: React.FC = () => (
  <div className="about-us-container">
    <AboutUsText />
    <CardContainer />
  </div>

);

export default AboutUs;
