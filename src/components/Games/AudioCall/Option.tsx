import * as React from 'react';
// import { State } from 'models';
// import { useSelector } from 'react-redux';

function Option({ item }: {item: number}): JSX.Element {
  return (
    <option value={item}>{item}</option>
  );
}

export default Option;
