import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import * as React from 'react';
import GameTab from './gameTab';
import './index.scss';

const DescriptionTabsContainer: React.FC = () => (
  <div className="game-tab-wrapper">
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Overview">
        <GameTab />
      </Tab>
      <Tab eventKey="Audio Call" title="AudioCall">
        <GameTab />
      </Tab>
      <Tab eventKey="English Puzzle" title="EnglishPuzzle">
        <GameTab />
      </Tab>
      <Tab eventKey="Savannah" title="Savannah">
        <GameTab />
      </Tab>
      <Tab eventKey="Speak it" title="SpeakIt">
        <GameTab />
      </Tab>
      <Tab eventKey="Sprint" title="Sprint">
        <GameTab />
      </Tab>
    </Tabs>

  </div>
);

export default DescriptionTabsContainer;
