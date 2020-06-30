/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import './index.scss';
import {useSelector} from "react-redux";
import {State} from "../../../../models/state";

function ShowImage() {
  const background = useSelector((state: State) => state.speakItFetch.background);
  const translate = useSelector((state: State) => state.speakItFetch.translate);

  return (
    <div className="img-wrapper">
      <img src={background} alt="image" className="card-img" />
      <p className="translation">{translate}</p>
    </div>
  );
}

export default ShowImage;
