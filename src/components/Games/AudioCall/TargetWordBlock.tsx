/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';

function TargetWordBlock(): JSX.Element {
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const currActiveId = useSelector((state: State) => state.audioCallAnswer.progress);
  // console.log(currActiveId);

  function playWordAudio() {
    const id = isChecked ? currActiveId - 1 : currActiveId;
    const audioUrl: string = currWords[id].audio;
    // console.log(currActiveId);
    const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${audioUrl}`;
    const audio = new Audio(url);
    // eslint-disable-next-line no-void
    void audio.play();
  }

  if (!isChecked && currActiveId < 10) {
    playWordAudio();
  }

  if (isChecked) {
    const imageUrl: string = currWords[currActiveId - 1].image;
    const currWord = currWords[currActiveId - 1].word;
    return (
      <div className="d-flex flex-column bg-info align-items-center">
        {/* <img src={`https://raw.githubusercontent.com/lactivka/rslang-data/master/${currWords[3].image}`} alt="" /> */}
        <div className="bg-info rounded-pill" style={{ width: '300px', height: '200px', background: `url(https://raw.githubusercontent.com/lactivka/rslang-data/master/${imageUrl})` }} />
        <div className="d-flex bg-info align-items-center">
          <i className="fas fa-volume-up text-white my-5 mr-5" role="button" style={{ cursor: 'pointer' }} onClick={() => playWordAudio()} />
          <h2>{currWord}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center bg-info">
      <div className="d-flex justify-content-center align-items-center bg-info rounded-pill" style={{ width: '300px', height: '312px' }}>
        <i
          className="fas fa-volume-up text-white my-5"
          role="button"
          style={{ cursor: 'pointer' }}
          onClick={() => playWordAudio()}
        />
      </div>
    </div>

  );
}

export default TargetWordBlock;
