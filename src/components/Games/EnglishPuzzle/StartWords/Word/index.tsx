/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import '../index.scss';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  word: string;
  cId: number;
  idx: number;
}

const Word: React.FunctionComponent<Props> = ({ word, cId, idx }) => (
  <Draggable draggableId={cId.toString()} index={idx}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className="start-word"
      >
        {word}
      </div>
    )}
  </Draggable>
);
export default Word;
