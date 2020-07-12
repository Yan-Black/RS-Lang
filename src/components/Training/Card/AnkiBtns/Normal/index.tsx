import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/Training/actions';
import { ru } from 'constants/training-constants';

const Normal: React.FC = () => {
  // to do use lang, current progress and daily cards limit from store
  const usedLang = ru;
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);

  const btnClickHandler = () => {
    if (canMoveToNext) {
      // to do  stay time to next repeating without changes
      dispatch(progressTraining());
    }
  };

  return (
    <div className="d-flex flex-column">
      {/* to do add not static period to next repeating */}
      <span className="text-center">18 d</span>
      <button
        className="btn btn-outline-info"
        type="button"
        id="normal-btn"
        onClick={btnClickHandler}
      >
        {usedLang.buttons.rememberBTN}
      </button>
    </div>
  );
};

export default Normal;
