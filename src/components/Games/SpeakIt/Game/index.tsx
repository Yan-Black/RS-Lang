import * as React from 'react';
import './index.scss';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import LevelControl from '../Level-control';
import ShowImage from '../ShowImage';
import Cards from '../Cards';
import Control from '../Control';

function Game({ dataWords, background, setBackground, translate, setTranslate }) {
  return (
    <Container>
      <Row>
        <Col>
          <LevelControl />
        </Col>
      </Row>
      <Row>
        <Col>
          <ShowImage
            background={background}
            translate={translate}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards
            dataWords={dataWords}
            setBackground={setBackground}
            setTranslate={setTranslate}
          />
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
