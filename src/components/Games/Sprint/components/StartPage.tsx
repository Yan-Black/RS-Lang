import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { stopSprint, startGameMode } from 'containers/Games/Sprint/actions';
import './sass/sprint.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Info from './Info';
import Timer from './Timer';
import Game from './Game';
import bgImage from '../assets/img/bgImage.jpg';

function StartPage(): JSX.Element {
  const isSprint = useSelector((state: State) => state.sprintMode.isSprint);
  const isGameMode = useSelector((state: State) => state.sprintGameMode.isGameMode);
  const totalScore = useSelector((state: State) => state.sprintScore.score);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const startButtonHandler = () => {
    dispatch(startGameMode());
  };
  const stopButtonHandler = () => {
    dispatch(stopSprint());
  };

  return (
    <div>
      {
        isSprint ? (
          <main className="text-white text-center d-flex flex-column justify-content-center main-container" style={{ height: '100vh', background: `url(${bgImage})`, backgroundSize: 'cover' }}>
            <FontAwesomeIcon
              icon={faWindowClose}
              className="button-close"
              size="lg"
              onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>The game is not finished. Are you sure you want to stop?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={stopButtonHandler}>
                  Yes, stop
                </Button>
              </Modal.Footer>
            </Modal>
            {
            isGameMode ? (
              <div className="content-container">
                <Timer />
                <Game />
              </div>
            )
              : (
                <div className="content-container">
                  {
                    totalScore > 0 ? (
                      <p>
                        Your result:
                        {' '}
                        {totalScore}
                        {'. '}
                        Do you want to play again?
                      </p>
                    )
                      : (
                        <Info />
                      )
                  }
                  <Button
                    variant="info"
                    className="pl-4 pr-4"
                    onClick={startButtonHandler}
                  >
                    Start
                  </Button>
                </div>
              )
              }
          </main>
        ) : (null)
      }
    </div>
  );
}

export default StartPage;
