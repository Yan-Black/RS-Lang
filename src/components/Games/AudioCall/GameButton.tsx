import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  statisticPage, checkAnswer, resetGame, progressGame, notKnowWords,
  updateLongStatDate, updateLongStatTime, updateLongStatLevels,
  updateLongStatFailed, updateLongStatSuccess,
} from 'containers/Games/AudioCall/actions';
import { State } from 'models';
import { Json } from 'containers/Games/AudioCall/models';
import { usedLang } from 'constants/audio-call-constants';

function GameButton(): JSX.Element {
  // to do use lang from store
  const dispatch = useDispatch();
  const currWords = useSelector((state: State) => state.audioCallCurrWords);
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const currActiveId = useSelector((state: State) => state.audioCallAnswer.progress);
  const learningWords: Array<Json> = useSelector(
    (state: State) => state.dictionaryState.learningWords,
  );
  const difficultWords: Array<Json> = useSelector(
    (state: State) => state.dictionaryState.difficultWords,
  );
  const failedWords = useSelector((state: State) => state.audioCallStatistic.wrongAnswers);
  const successWords = useSelector((state: State) => state.audioCallStatistic.correctAnswers);
  const savedDate = useSelector((state: State) => state.audioCallLongStatistic.playedDates[0]);
  const level: string = (
    learningWords.includes(currWords[0]) || difficultWords.includes(currWords[0]))
    ? usedLang.longStatistic.myWords : useSelector((state: State) => state.audioCallLevel);
  const round: string = (learningWords.includes(currWords[0]) || difficultWords.includes(currWords[0])) ? '-' : useSelector((state: State) => state.audioCallRound);

  const btnNextClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (currActiveId >= 10) {
      dispatch(resetGame());
      dispatch(statisticPage());
      if (!savedDate || savedDate.date !== new Date().toDateString()) {
        dispatch(updateLongStatDate({ date: new Date().toDateString() }));
      }
      dispatch(updateLongStatTime(
        {
          date: new Date().toDateString(),
          payload: new Date().toTimeString().slice(0, 9),
        },
      ));
      dispatch(updateLongStatLevels({ date: new Date().toDateString(), payload: `${usedLang.longStatistic.group} ${level} - ${usedLang.longStatistic.page} ${round}` }));
      dispatch(updateLongStatFailed(
        { date: new Date().toDateString(), payload: failedWords.length },
      ));
      dispatch(updateLongStatSuccess(
        { date: new Date().toDateString(), payload: successWords.length },
      ));
    } else {
      dispatch(checkAnswer('null'));
    }
  };

  const btnDoNotKnowClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(notKnowWords(currWords[currActiveId]));
    dispatch(checkAnswer('null'));
    dispatch(progressGame());
  };

  if (isChecked) {
    return (
      <button
        tabIndex={-1}
        className="btn btn-outline-light px-5"
        type="button"
        onClick={btnNextClickHandler}
      >
        ⟹
      </button>
    );
  }

  return (
    <button
      tabIndex={-1}
      className="btn btn-outline-light px-5"
      type="button"
      onClick={btnDoNotKnowClickHandler}
    >
      {usedLang.buttons.notKnow}
    </button>
  );
}

export default GameButton;
