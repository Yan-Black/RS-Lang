/* eslint-disable max-len */
import * as React from 'react';
import { Json } from 'containers/Games/AudioCall/models';

function StatisticItem(currWord: {item: Json}): JSX.Element {
  if (!currWord) {
    return null;
  }

  function playWordAudio() {
    const audioUrl: string = currWord.item.audio;
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
  const speakerIconKeyPressHandler = (event: React.KeyboardEvent<HTMLElement>) => event.preventDefault();
  const trashMouseOverHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => hovered(event);
  const trashMouseLeaveHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => unHovered(event);
  const trashFocusHandler = (event: React.FocusEvent<HTMLElement>) => hovered(event);

  return (
    <div className="d-flex bg-light my-2 align-items-baseline">
      <i className="fas fa-volume-down mr-3" role="button" aria-label="Speaker icon" tabIndex={-1} style={{ cursor: 'pointer' }} onClick={speakerIconClickHandler} onKeyPress={speakerIconKeyPressHandler} />
      <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
        <span className="text-primary">{currWord.item.word}</span>
        {' '}
        -
        {' '}
        {currWord.item.wordTranslate}
      </span>
      <i className="fas fa-trash ml-auto mr-3" style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" onMouseOver={trashMouseOverHandler} onMouseLeave={trashMouseLeaveHandler} onFocus={trashFocusHandler} />
    </div>
  );
}

export default StatisticItem;
