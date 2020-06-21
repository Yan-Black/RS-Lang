import * as React from 'react';
import './index.scss';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import LevelControl from '../Level-control';
import ShowImage from '../ShowImage';
import Cards from '../Cards';
import Control from '../Control';

function Game() {

  return (
    <Container>
      <Row>
        <Col>
          <LevelControl />
        </Col>
      </Row>
      <Row>
        <Col>
          <ShowImage />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards />
        </Col>
      </Row>
      <Row>
        <Col>
          <Control />
        </Col>
      </Row>
    </Container>
  );
}

export default Game;
