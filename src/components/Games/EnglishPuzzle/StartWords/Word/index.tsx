/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import '../index.scss';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  onClickFn: React.MouseEventHandler;
  word: string;
  cId: number;
  idx: number;
  id: number
}

const Word: React.FC<Props> = ({
  word, cId, idx, id, onClickFn,
}) => (
  <Draggable draggableId={cId.toString()} index={idx}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className="start-word"
        id={`${id}`}
        onClick={onClickFn}
      >
        {word}
      </div>
    )}
  </Draggable>
);
export default Word;
