import * as React from 'react';
import './index.scss';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

interface Props {
  tabInfo
}

const GameTab: React.FC<Props> = (tabProp) => (
  <div className="game-tab">
    <Image src={tabProp.tabInfo.imagePath} fluid />
    <p>{tabProp.tabInfo.text}</p>
    <Button className="game-tab-button" variant="outline-primary" href={tabProp.tabInfo.linkToGame}>PLay it now!</Button>
  </div>

);

export default GameTab;
