import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/TrainingCard/actions';
import { ru } from 'constants/training-constants';

const Repeat: React.FC = () => {
  // to do use lang, current progress and daily cards limit from store
  const usedLang = ru;
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const btnClickHandler = () => {
    if (canMoveToNext) {
      // to do  back word to current repeating words
      dispatch(progressTraining());
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* to do add not static period to next repeating */}
      <span className="text-center">&gt; 10 min</span>
      <button
        className="btn btn-outline-info"
        type="button"
        id="repeat-btn"
        onClick={btnClickHandler}
      >
        {usedLang.buttons.againgBTN}
      </button>
    </div>
  );
};

export default Repeat;
