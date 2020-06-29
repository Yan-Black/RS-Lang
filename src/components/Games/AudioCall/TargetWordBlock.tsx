/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

  // function hovered(event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>): void {
  //   // event.currentTarget.classList.add('border');
  //   if (!isChecked) event.currentTarget.classList.add('shadow');
  // }

  // function unHovered(event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>): void {
  //   // event.currentTarget.classList.remove('border');
  //   if (!isChecked) event.currentTarget.classList.remove('shadow');
  // }
  // function setShow(toShow: boolean): void {
  //   show = toShow;
  // }

  // function playIndicate() {
  //   console.log(spinnerClass);
  //   setShowSpinner(true);
  //   // play = false;
  //   // setPlay(false);
  //   console.log(spinnerClass);
  //   // setTimeout(setShow, 5000, false);
  //   setTimeout(() => { setShowSpinner(false); console.log(spinnerClass); }, 1000);
  //   // setTimeout(() => { setPlay(true); console.log(spinnerClass); }, 1600);
  //   // setTimeout(() => console.log('1 sec passed'), 1000);
  //   // console.log(show);
  // }

  const speakerIconClickHandler = (): void => { playWordAudio(); };

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
          <i className="fas fa-volume-up text-white my-5 mr-5 p-2 shadow border border-light rounded-circle" role="button" style={{ cursor: 'pointer' }} onClick={speakerIconClickHandler} />
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
          style={{
            width: '200px', height: '200px', cursor: 'pointer', background: `url(${speakerIcon})`, backgroundSize: 'contain',
          }}
          onClick={speakerIconClickHandler}
        />
      </div>
    </div>

  );
}

export default TargetWordBlock;
