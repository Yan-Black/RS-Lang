import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import { Droppable } from 'react-beautiful-dnd';
import Word from './DraggableWords/Word';
import Description from './DraggableWords/Description';
import { DroppableProps } from '../Models';

const DroppableBase: React.FC<DroppableProps> = ({
  rowLength, words, onClickFn, cssStyle, drag, back, description,
}) => {
  const isOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  return (
    <>
      <Description description={description} />
      <Droppable droppableId="base" direction="horizontal">
        {({ innerRef, droppableProps, placeholder }) => (
          <div
            className={isOpen ? 'start-words disabled' : 'start-words'}
            style={{ display: 'grid', gridTemplateColumns: `repeat(${rowLength}, 1fr)` }}
            ref={innerRef}
            {...droppableProps}
          >
            {words.selected.map((card, idx:number) => (
              <Word
                key={`${card.word}-${card.cId}`}
                cId={card.cId}
                word={card.word}
                idx={idx}
                id={idx}
                onClickFn={onClickFn}
                cssStyle={cssStyle[idx]}
                drag={drag}
                back={back}
                offsetX={card.xOffset}
              />
            ))}
            {placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};
export default DroppableBase;
