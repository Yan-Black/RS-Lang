import * as React from 'react';
import Option from './Option';

function OptionItems({ options }): any {
  return (
    options.map((option, ind) => <Option item={+ind + 1} key={+ind + 1} />)
  );
}

export default OptionItems;
