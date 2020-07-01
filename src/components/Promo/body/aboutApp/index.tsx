import * as React from 'react';
import './index.scss';
import DemoVideo from './aboutVideo';
import AppDescription from './aboutDescription';

const AboutApp: React.FC = () => (
  <div>
    <DemoVideo />
    <AppDescription />
  </div>

);

export default AboutApp;
