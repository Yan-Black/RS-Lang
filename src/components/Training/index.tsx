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
import AppSettings from './Card/AppSettings';

const Training: React.FC = () => (
  <div className="training-page-wrapper">
    {/* <Link to="/Main"> */}
    <button
      type="button"
    >
      Back
    </button>
    {/* </Link> */}
    <AppSettings />
    <Card />
    <AnkiBtns />
  </div>
);

export default Training;
