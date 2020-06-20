import * as React from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import './index.scss';
import { useState } from 'react';
import Game from './Game';

function SpeakIt() {
  const [game, setGame] = useState(false);

  return (
    <div>
      { game
        ? (<Game />)
        : (
          <Container className="text-center intro" fluid>
            <Row style={{ position: 'relative', top: '30%' }}>
              <Col>
                <h2 className="title">SPEAKIT</h2>
                <p className="intro-text">
                  Click on the words to hear them sound.
                  <br />
                  Click on the button and speak the words into the microphone.
                </p>
                <Button
                  variant="dark"
                  className="intro-btn"
                  onClick={() => setGame(true)}
                >
                  Start
                </Button>
              </Col>
            </Row>
          </Container>
        )}
    </div>
  );
}

export default SpeakIt;
