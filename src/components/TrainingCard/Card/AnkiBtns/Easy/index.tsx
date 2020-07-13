import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/TrainingCard/actions';
import { ru } from 'constants/training-constants';

const Easy: React.FC = () => {
  // to do use lang, current progress and daily cards limit from store
  const usedLang = ru;
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const btnClickHandler = () => {
    if (canMoveToNext) {
      // to do  increase time to next repeating
      dispatch(progressTraining());
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* to do add not static period to next repeating */}
      <span className="text-center">1.5 m  </span>
      <button
        className="btn btn-outline-info"
        type="button"
        id="easy-btn"
        onClick={btnClickHandler}
      >
        {usedLang.buttons.easyBTN}
      </button>
    </div>
  );
};

export default Easy;
