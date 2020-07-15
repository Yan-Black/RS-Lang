import * as React from 'react';
import './sass/sprint.scss';

function Info(): JSX.Element {
  const message = 'Play Sprint if you want to improve your English and check the speed of your reaction';

  return (
    <div>
      <p>{message}</p>
      <p>Ready to start?</p>
    </div>
  );
}

export default Info;
