/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import '../index.scss';
import { Draggable } from 'react-beautiful-dnd';
import { WordProps } from '../../../Models';

const Word: React.FC<WordProps> = ({
  word, cId, idx, id, onClickFn, cssStyle, drag,
}) => (
  <Draggable
    draggableId={cId.toString()}
    index={idx}
    isDragDisabled={drag}
  >
    {({ innerRef, draggableProps, dragHandleProps }) => (
      <div
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
        className={cssStyle}
        id={`${id}`}
        onClick={onClickFn}
      >
        {word}
      </div>
    )}
  </Draggable>
);
export default Word;
