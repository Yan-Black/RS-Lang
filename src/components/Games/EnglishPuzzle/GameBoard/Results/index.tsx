import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { State } from 'models/state';
import { speakerEnable, speakerDisable } from 'containers/Games/EnglishPuzzle/HintButtons/actions';
import ContinueBtn from '../HelpButtons/ContinueBut';
import StatisticBtn from '../HelpButtons/StatisticBut';
import { pronounceAudio } from '../../Constants';
import './index.scss';
import { ResultsProps } from '../Models';

const Results: React.FC<ResultsProps> = ({
  back, description, setCheckedStateToCards,
  wordsToApply, setDragging,
}) => {
  const dispatch = useDispatch();
  const failedWords: string[] = useSelector((state: State) => state.engPuzzleFailed.failed);
  const successWords: string[] = useSelector((state: State) => state.engPuzzleSuccess.success);
  const isOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const speakHandler = (
    str: string,
  ) => pronounceAudio(true, str, dispatch, speakerEnable, speakerDisable);
  return (
    <div className={isOpen ? 'results-wrapper' : 'results-wrapper disabled'}>
      <div className="results-container">
        <div className="results-header">
          <img className="results-miniature" src={back} alt="art" />
          <div className="results-miniature-description">
            {description}
          </div>
        </div>
        <div className="results-statistic">
          <div className="results-dont-know">
            <h5>
              I don&apos;t know
              &nbsp;
              <span className="failed">
                {failedWords.length}
              </span>
            </h5>
            <ul className="results-list">
              {failedWords.map((words: string) => (
                <li key={words}>
                  <FontAwesomeIcon
                    className="results-audio"
                    icon={faVolumeUp}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={speakHandler.bind(null, words)}
                  />
                  &nbsp;&nbsp;
                  {words}
                </li>
              ))}
            </ul>
          </div>
          <div className="results-know">
            <h5>
              I know
              &nbsp;
              <span className="success">
                {successWords.length}
              </span>
            </h5>
            <ul className="results-list">
              {successWords.map((words: string) => (
                <li key={words}>
                  <FontAwesomeIcon
                    className="results-audio"
                    icon={faVolumeUp}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={speakHandler.bind(null, words)}
                  />
                  &nbsp;&nbsp;
                  {words}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="results-footer">
          <ContinueBtn
            wordsToApply={wordsToApply}
            setDragging={setDragging}
            setCheckedStateToCards={setCheckedStateToCards}
          />
          <StatisticBtn />
        </div>
      </div>
    </div>
  );
};
export default Results;
