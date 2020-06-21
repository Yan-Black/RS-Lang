import * as React from 'react';
import './index.scss';
import { Button } from 'react-bootstrap';

function Control() {
  return (
    <div className="btn-wrapper">
      <Button variant="danger" className="btn">Stop</Button>
      <Button variant="success" className="btn">Start</Button>
      <Button variant="info" className="btn">Rusult</Button>
    </div>
  );
}

export default Control;
