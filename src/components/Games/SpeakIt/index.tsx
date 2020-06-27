import * as React from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import './index.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'containers/Games/SpeakIt/FetchGroup/actions';
import { State } from 'models';
import Game from './Game';

const SpeakIt = () : JSX.Element => {
  const dispatch = useDispatch();
  const dataWords = useSelector((state: State) => state.speakItfetch.dataWords);
  const group = useSelector((state: State) => state.speakItControl.group);
  const [game, setGame] = useState(false);
  const [background, setBackground] = useState('http://languagenow.co.uk/wp-content/uploads/2016/05/languagenow_english.jpg');
  const [translate, setTranslate] = useState('');
  // trnsl.1.1.20200507T164750Z.5dd658182b040713.b473c0f7b0c02f19e321c13db0b9429dd971a420

  useEffect(() => {
    dispatch(fetchWords(group));
  }, [group]);

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
};

export default SpeakIt;
