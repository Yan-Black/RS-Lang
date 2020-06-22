import * as React from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import './index.scss';
import { useState, useEffect } from 'react';
import Game from './Game';

function SpeakIt() {
  const getWords = async (page: number, group: number) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    const res = await fetch(url);
    const json = await res.json();
    setDataWords(json);
  };

  const [game, setGame] = useState(false);
  const [dataWords, setDataWords] = useState([]);
  const [background, setBackground] = useState('http://languagenow.co.uk/wp-content/uploads/2016/05/languagenow_english.jpg');
  const [translate, setTranslate] = useState('');
  // trnsl.1.1.20200507T164750Z.5dd658182b040713.b473c0f7b0c02f19e321c13db0b9429dd971a420

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getWords(0, 0);
  }, []);

  return (
    <div>
      {game
        ? (
          <Game
            dataWords={dataWords}
            background={background}
            setBackground={setBackground}
            translate={translate}
            setTranslate={setTranslate}
          />
        )
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
