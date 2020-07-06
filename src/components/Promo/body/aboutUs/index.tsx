import * as React from 'react';
import './index.scss';
import CardContainer from './cardContainer';
import AboutUsText from './aboutUsDescription';

interface Props {
  aboutUs
}

const AboutUs: React.FC<Props> = (aboutUs) => (
  <div className="about-us-container">
    <AboutUsText text={aboutUs.aboutUs.text} />
    <CardContainer devCardSInfo={aboutUs.aboutUs.devCards} />
  </div>

);

export default AboutUs;
