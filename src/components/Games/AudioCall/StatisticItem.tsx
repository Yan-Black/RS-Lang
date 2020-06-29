/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
// import { Json } from './utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function StatisticItem(currWord: any): JSX.Element {
  if (!currWord) {
    return null;
  }
  // console.log(currWord, currWord.wordTranslate);
  function playWordAudio() {
    const audioUrl: string = currWord.currWord.audio;
    // console.log(currActiveId);
    const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${audioUrl}`;
    const audio = new Audio(url);
    // eslint-disable-next-line no-void
    void audio.play();
  }

  function hovered(event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>): void {
    event.currentTarget.classList.add('text-danger');
  }

  function unHovered(event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>): void {
    event.currentTarget.classList.remove('text-danger');
  }

  const speakerIconClickHandler = () => playWordAudio();
  const trashMouseOverHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => hovered(event);
  const trashMouseLeaveHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => unHovered(event);
  const trashFocusHandler = (event: React.FocusEvent<HTMLElement>) => hovered(event);

  return (
    <div className="d-flex bg-light my-2 align-items-baseline">
      <i className="fas fa-volume-down mr-3" style={{ cursor: 'pointer' }} onClick={speakerIconClickHandler} />
      <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
        <span className="text-primary">{currWord.currWord.word}</span>
        {' '}
        -
        {' '}
        {currWord.currWord.wordTranslate}
      </span>
      <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" onMouseOver={trashMouseOverHandler} onMouseLeave={trashMouseLeaveHandler} onFocus={trashFocusHandler} />
    </div>
  );
}

export default StatisticItem;
