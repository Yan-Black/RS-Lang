import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import { Droppable } from 'react-beautiful-dnd';
import Word from './DraggableWords/Word';
import Loader from './DraggableWords/Loader';
import Description from './DraggableWords/Description';
import { DroppableProps } from '../Models';

const DroppableBase: React.FC<DroppableProps> = ({
  rowLength, words, onClickFn, cssStyle, drag, back, description,
}) => {
  const loading = useSelector((state: State) => state.loading.isLoading);
  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <>
      <Description description={description} />
      <Droppable droppableId="base" direction="horizontal">
        {({ innerRef, droppableProps, placeholder }) => (
          <div
            className="start-words"
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
