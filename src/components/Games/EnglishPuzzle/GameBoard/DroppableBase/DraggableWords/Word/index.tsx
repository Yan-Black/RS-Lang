/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import '../index.scss';
import { Draggable } from 'react-beautiful-dnd';
import { WordProps } from '../../../Models';

const Word: React.FC<WordProps> = ({
  word, cId, idx, id, onClickFn, cssStyle, drag, back, offsetX,
}) => {
  const yOffset = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const backBtnState = useSelector((state: State) => state.engPuzzleBtns.backgroundHintActive);
  const [defaultStyle, setDefaultStyle] = backBtnState ? useState(cssStyle) : useState(`${cssStyle} cover`);
  const setWordStyle = (draggableStyle) => ({
    backgroundImage: `url(${back})`,
    backgroundSize: `${972.8}px ${480}px`,
    backgroundPositionY: `${yOffset[activeIdx]}%`,
    backgroundPositionX: `-${offsetX}px`,
    ...draggableStyle,
  });

  useEffect(() => {
    if (backBtnState) {
      setDefaultStyle(cssStyle);
    } else {
      setDefaultStyle(`${cssStyle} cover`);
    }
  }, [backBtnState, cssStyle]);

  return (
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
          className={defaultStyle}
          id={`${id}`}
          onClick={onClickFn}
          style={setWordStyle(
            draggableProps.style,
          )}
        >
          {word}
        </div>
      )}
    </Draggable>
  );
};
export default Word;
