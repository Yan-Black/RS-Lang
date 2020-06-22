/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import './index.scss';

function ShowImage({ background, translate }) {
  return (
    <div className="img-wrapper">
      <img src={background} alt="image" className="card-img" />
      <p className="translation">{translate}</p>
    </div>
  );
}

export default ShowImage;
