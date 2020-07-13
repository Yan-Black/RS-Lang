import * as React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';
import Card from './Card';
import './index.scss';
import AnkiBtns from './Card/AnkiBtns';

const Training: React.FC = () => (
  <div className="training-page-wrapper">
    {/* <Link to="/Main"> */}
    <button
      type="button"
    >
      Back
    </button>
    {/* </Link> */}
    <Card />
    <AnkiBtns />
  </div>
);

export default Training;
