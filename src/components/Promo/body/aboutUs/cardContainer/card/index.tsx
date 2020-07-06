import * as React from 'react';
import './index.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface Props {
  cardInfo
}

const DevCard: React.FC<Props> = (info) => (
  <Card className="dev-card">
    <Card.Img variant="top" src={info.cardInfo.imagePath} />
    <Card.Body>
      <Card.Title>{info.cardInfo.name}</Card.Title>
      <Card.Text>{info.cardInfo.text}</Card.Text>
      <Button variant="light" href={info.cardInfo.linkToGit}>Git</Button>
    </Card.Body>
  </Card>
);

export default DevCard;
