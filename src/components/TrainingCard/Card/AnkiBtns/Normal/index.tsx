import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { progressTraining } from 'containers/TrainingCard/actions';
import { ru, eng } from 'constants/training-constants';

const Normal: React.FC = () => {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
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
        className="btn btn-success"
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
