import * as React from 'react';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { State } from 'models/state';
import { InitialStateStatisticInfo } from 'containers/Games/EnglishPuzzle/Models';
import ContinueBtn from '../HelpButtons/ContinueBut';
import './index.scss';
import { StatisticProps } from '../Models';

const Statistic: React.FC<StatisticProps> = ({
  wordsToApply, setDragging, setCheckedStateToCards,
}) => {
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  const statInfo: InitialStateStatisticInfo = useSelector(
    (state: State) => state.engPuzzleStatisticInfo,
  );
  return (
    <div className={isStatOpen ? 'eng-puzzle-statistic-wrapper' : 'disabled'}>
      <div className="eng-puzzle-statistic">
        <div className="eng-puzzle-statistic-content">
          <Accordion>
            {statInfo.playedDates.map((date, i) => (
              <Card key={date}>
                <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
                  {date}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${i}`}>
                  <Card.Body>
                    <table className="eng-puzzle-stat-table">
                      <tbody>
                        <tr>
                          <th>Time:</th>
                          <th>Level:</th>
                          <th>Success:</th>
                          <th>Failed:</th>
                        </tr>
                        {statInfo.playedTimes.map((info, idx) => (
                          info.date === statInfo.playedDates[i] ? (
                            <tr key={info.time}>
                              <td>{statInfo.playedTimes[idx].time}</td>
                              <td>{statInfo.playedLevels[idx].level}</td>
                              <td>{statInfo.success[idx].success}</td>
                              <td>{statInfo.failed[idx].failed}</td>
                            </tr>
                          ) : (null)
                        ))}
                      </tbody>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
        <div className="eng-puzzle-statistic-footer">
          <ContinueBtn
            wordsToApply={wordsToApply}
            setDragging={setDragging}
            setCheckedStateToCards={setCheckedStateToCards}
          />
        </div>
      </div>
    </div>
  );
};
export default Statistic;
