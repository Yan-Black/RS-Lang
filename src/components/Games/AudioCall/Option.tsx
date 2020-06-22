import * as React from 'react';

function Option({ item }) {
  return (
    <option value={item}>{item}</option>
  );
}

export default Option;
