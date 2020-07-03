import * as React from 'react';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { State } from 'models/state';
import ContinueBtn from '../HelpButtons/ContinueBut';
import './index.scss';
import { StatisticProps } from '../Models';

const Statistic: React.FC<StatisticProps> = ({
  wordsToApply, setDragging, setCheckedStateToCards,
}) => {
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  const statInfo = useSelector((state: State) => state.engPuzzleStatisticInfo);
  return (
    <div className={isStatOpen ? 'eng-puzzle-statistic-wrapper' : 'disabled'}>
      <div className="eng-puzzle-statistic">
        <div className="eng-puzzle-statistic-content">
          <Accordion>
            {statInfo.playedDates.map((date, i) => (
              <Card key={date}>
                <Accordion.Toggle as={Card.Header} eventKey={i}>
                  {date}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={i}>
                  <Card.Body>
                    <table>
                      <tbody>
                        <td>
                          <th>Time:</th>
                          {statInfo.playedTimes.map((info) => (
                            info.date === statInfo.playedDates[i] ? (
                              <tr key={info.time}>{info.time}</tr>
                            ) : (null)
                          ))}
                          <th>Level:</th>
                          {statInfo.playedLevels.map((info) => (
                            info.date === statInfo.playedDates[i] ? (
                              <tr key={info}>{info.level}</tr>
                            ) : (null)
                          ))}
                          <th>Success:</th>
                          {statInfo.success.map((info) => (
                            info.date === statInfo.playedDates[i] ? (
                              <tr key={info}>{info.success}</tr>
                            ) : (null)
                          ))}
                          <th>Failed:</th>
                          {statInfo.failed.map((info) => (
                            info.date === statInfo.playedDates[i] ? (
                              <tr key={info}>{info.failed}</tr>
                            ) : (null)
                          ))}
                        </td>
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
