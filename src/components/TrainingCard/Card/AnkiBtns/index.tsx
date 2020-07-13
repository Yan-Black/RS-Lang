import * as React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { State } from 'models';
import Repeat from './Repeat';
import Hard from './Hard';
import Normal from './Normal';
import Easy from './Easy';

const AnkiBtns: React.FC = () => {
  const showIntervalBTNS = useSelector((state: State) => state.trainingSettings.showIntervalBTNS);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);

  if (!showIntervalBTNS || !isAnswerCorrect) {
    return null;
  }

  return (
    <div className="anki-btns-wrapper d-flex justify-content-around flex-wrap mx-auto pt-3">
      <Repeat />
      <Easy />
      <Normal />
      <Hard />
    </div>
  );
};

export default AnkiBtns;
