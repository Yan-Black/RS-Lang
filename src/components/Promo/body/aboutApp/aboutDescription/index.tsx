import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import * as React from 'react';
import GameTab from './gamesAbout/gameTab';
import './index.scss';

interface Props {
  tabsInfo
}

const DescriptionTabsContainer: React.FC<Props> = (tabsProps) => (
  <div className="game-tab-wrapper">
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Overview">
        <GameTab tabInfo={tabsProps.tabsInfo.overview} />
      </Tab>
      <Tab eventKey="Audio Call" title="AudioCall">
        <GameTab tabInfo={tabsProps.tabsInfo.audioCall} />
      </Tab>
      <Tab eventKey="English Puzzle" title="EnglishPuzzle">
        <GameTab tabInfo={tabsProps.tabsInfo.englishBricks} />
      </Tab>
      <Tab eventKey="Savannah" title="Savannah">
        <GameTab tabInfo={tabsProps.tabsInfo.savannah} />
      </Tab>
      <Tab eventKey="Speak it" title="SpeakIt">
        <GameTab tabInfo={tabsProps.tabsInfo.speakIt} />
      </Tab>
      <Tab eventKey="Sprint" title="Sprint">
        <GameTab tabInfo={tabsProps.tabsInfo.sprint} />
      </Tab>
    </Tabs>

  </div>
);

export default DescriptionTabsContainer;
