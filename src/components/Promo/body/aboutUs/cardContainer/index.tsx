import * as React from 'react';
import './index.scss';
import DevCard from './card';

const CardContainer: React.FC = () => (
  <div className="card-container">
    <DevCard />
    <DevCard />
    <DevCard />
    <DevCard />
    <DevCard />
    <DevCard />
    <DevCard />
    <DevCard />
  </div>

);

export default CardContainer;
