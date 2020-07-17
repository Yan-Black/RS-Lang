import * as React from 'react';
import Deleted from '../Deleted';
import Difficult from '../Difficult';
import Learning from '../Learning';

function View(props: {dictionaryPage: string}): JSX.Element {
  switch (props.dictionaryPage) {
    case ('difficult'):
      return (
        <Difficult />
      );
    case ('deleted'):
      return (
        <Deleted />
      );
    default:
      return (
        <Learning />
      );
  }
}

export default View;
