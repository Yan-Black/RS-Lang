/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';

const Normal: React.FC = () => (
  <div className="d-flex flex-column">
    <label htmlFor="normal-btn">18 дней</label>
    <button
      type="button"
      id="normal-btn"
    >
      Помню
    </button>
  </div>
);

export default Normal;
