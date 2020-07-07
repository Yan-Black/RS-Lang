import * as React from 'react';
import { Json } from 'containers/Games/AudioCall/models';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { addToDeleted, difficultToDeleted } from 'containers/Dictionary/actions';

function StatisticItem(currWord: {item: Json}): JSX.Element {
  if (!currWord) {
    return null;
  }

  const dispatch = useDispatch();
  const learningWords: Array<Json> = useSelector(
    (state: State) => state.dictionaryState.learningWords,
  );
  const difficultWords: Array<Json> = useSelector(
    (state: State) => state.dictionaryState.difficultWords,
  );
  const trashIconClass = (learningWords.includes(currWord.item) || difficultWords.includes(currWord.item)) ? 'fas fa-trash ml-auto mr-3' : 'd-none';

  async function playWordAudio() {
    const audioUrl: string = currWord.item.audio;
    const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${audioUrl}`;
    const audio = new Audio(url);
    await audio.play();
  }

  function hovered(
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>,
  ): void {
    event.currentTarget.classList.add('text-danger');
  }

  function unHovered(
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>,
  ): void {
    event.currentTarget.classList.remove('text-danger');
  }

  const speakerIconClickHandler = () => playWordAudio();
  const keyPressHandler = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => event.preventDefault();
  const trashMouseOverHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => hovered(event);
  const trashMouseLeaveHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => unHovered(event);
  const trashFocusHandler = (event: React.FocusEvent<HTMLElement>) => hovered(event);
  const trashClickHandler = () => {
    if (learningWords.includes(currWord.item)) dispatch(addToDeleted([currWord.item]));
    if (difficultWords.includes(currWord.item)) dispatch(difficultToDeleted([currWord.item]));
  };

  return (
    <div className="d-flex bg-light my-2 align-items-baseline">
      <i className="fas fa-volume-down mr-3" role="button" aria-label="Speaker icon" tabIndex={-1} style={{ cursor: 'pointer' }} onClick={speakerIconClickHandler} onKeyPress={keyPressHandler} />
      <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
        <span className="text-primary">{currWord.item.word}</span>
        {' '}
        -
        {' '}
        {currWord.item.wordTranslate}
      </span>
      <i className={trashIconClass} style={{ cursor: 'pointer' }} data-toggle="tooltip" data-placement="left" title="Удалить из словаря" tabIndex={-1} role="button" aria-label="Trash icon" onMouseOver={trashMouseOverHandler} onMouseLeave={trashMouseLeaveHandler} onFocus={trashFocusHandler} onClick={trashClickHandler} onKeyPress={keyPressHandler} />
    </div>
  );
}

export default StatisticItem;
