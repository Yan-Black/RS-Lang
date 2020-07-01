/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
// import { useState } from 'react';
import speakerIcon from '../../../assets/speaker_Icon.svg';
// import Spinner from './Spinner';

function TargetWordBlock(): JSX.Element {
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const currActiveId = useSelector((state: State) => state.audioCallAnswer.progress);
  // const [showSpinner, setShowSpinner] = useState(true);
  // const [play, setPlay] = useState(false);
  // let play = true;
  // let show = false;
  // const spinnerClass = showSpinner === true ? 'spinner-grow bg-light' : 'invisible';

  function playWordAudio() {
    const id = isChecked ? currActiveId - 1 : currActiveId;
    const audioUrl: string = currWords[id].audio;
    // console.log(currActiveId);
    const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${audioUrl}`;
    const audio = new Audio(url);
    // eslint-disable-next-line no-void
    void audio.play();
  }

  const speakerIconClickHandler = (): void => { playWordAudio(); };
  // const speakerIconFocusHandler = (event: React.FocusEvent<HTMLDivElement>): void => event.preventDefault();
  const speakerIconKeyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => event.preventDefault();

  if (!isChecked && currActiveId < 10) {
    playWordAudio();
    // hovered(event);
    // setTimeout((elem) => { unHovered(elem); }, 1500);
    // setTimeout(() => { setShowSpinner(false); console.log(spinnerClass); }, 1500);
  }

  if (isChecked) {
    const imageUrl: string = currWords[currActiveId - 1].image;
    const currWord = currWords[currActiveId - 1].word;
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        {/* <img src={`https://raw.githubusercontent.com/lactivka/rslang-data/master/${currWords[3].image}`} alt="" /> */}
        <div className="rounded-pill" style={{ width: '300px', height: '200px', background: `url(https://raw.githubusercontent.com/lactivka/rslang-data/master/${imageUrl})` }} />
        <div className="d-flex align-items-center">
          <i className="fas fa-volume-up text-white my-5 mr-5 p-2 shadow border border-light rounded-circle" tabIndex={0} role="button" style={{ cursor: 'pointer' }} onClick={speakerIconClickHandler} onKeyPress={speakerIconKeyPressHandler} />
          <h2>{currWord}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5 mb-4">
      <div className="d-flex justify-content-center align-items-center rounded-pill" style={{ width: '300px', height: '312px' }}>
        <div
          className="shadow rounded-circle"
          role="button"
          tabIndex={-1}
          style={{
            width: '200px', height: '200px', cursor: 'pointer', background: `url(${speakerIcon})`, backgroundSize: 'contain',
          }}
          onClick={speakerIconClickHandler}
          onKeyPress={speakerIconKeyPressHandler}
        />
      </div>
    </div>

  );
}

export default TargetWordBlock;
