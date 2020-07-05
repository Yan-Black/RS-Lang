import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { State } from 'models/state';
import { speakerEnable, speakerDisable } from 'containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/actions';
import { SavedResult } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/models';
import { ResultsProps } from 'components/Games/EnglishPuzzle/models';
import { pronounceAudio } from 'components/Games/EnglishPuzzle/Constants';
import ContinueBtn from '../HelpButtons/ContinueBut';
import StatisticBtn from '../HelpButtons/StatisticBut';
import './index.scss';

const Results: React.FC<ResultsProps> = ({
  back, description, setCheckedStateToCards,
  wordsToApply, setDragging,
}) => {
  const dispatch = useDispatch();
  const failedWords: SavedResult[] = useSelector((state: State) => state.engPuzzleFailed.failed);
  const successWords: SavedResult[] = useSelector((state: State) => state.engPuzzleSuccess.success);
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
              {failedWords.map((res: SavedResult) => (
                <li key={res.sentence}>
                  <FontAwesomeIcon
                    className="results-audio"
                    icon={faVolumeUp}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={speakHandler.bind(null, res.sentence)}
                  />
                  &nbsp;&nbsp;
                  <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: res.sentence.replace(
                        res.learning,
                        res.learning.fontcolor('#d66763'),
                      ),
                    }}
                  />
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
              {successWords.map((res: SavedResult) => (
                <li key={res.sentence}>
                  <FontAwesomeIcon
                    className="results-audio"
                    icon={faVolumeUp}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={speakHandler.bind(null, res.sentence)}
                  />
                  &nbsp;&nbsp;
                  <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: res.sentence.replace(
                        res.learning,
                        res.learning.fontcolor('#567cd6'),
                      ),
                    }}
                  />
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
