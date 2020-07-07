import * as React from 'react';
import './index.scss';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

interface Props {
  tabInfo
}

const GameTab: React.FC<Props> = ({ tabInfo }) => (
  <div className="game-tab">
    <Image src={tabInfo.imagePath} fluid />
    <p>{tabInfo.text}</p>
    <Button className="game-tab-button" variant="outline-primary"><Link to={tabInfo.linkToGame}>Play it now!</Link></Button>
  </div>
);

export default GameTab;
