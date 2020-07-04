import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import Repeat from './Repeat';
import Hard from './Hard';
import Normal from './Normal';
import Easy from './Easy';

const AnkiBtns: React.FC = () => {
  // const dispatch = useDispatch();
  const showIntervalBTNS = useSelector((state: State) => state.trainingSettings.showIntervalBTNS);

  if (!showIntervalBTNS) {
    return null;
  }

  return (
    <div className="anki-btns-wrapper d-flex justify-content-around mx-auto" style={{ width: '70%' }}>
      <Repeat />
      <Easy />
      <Normal />
      <Hard />
    </div>
  );
};

export default AnkiBtns;
