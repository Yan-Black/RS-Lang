/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';

const Repeat: React.FC = () => (
  <div className="d-flex flex-column">
    <label htmlFor="repeat-btn">&gt; 10 мин</label>
    <button
      type="button"
      id="repeat-btn"
    >
      Снова
    </button>
  </div>
);

export default Repeat;
