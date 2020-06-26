import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import { Droppable } from 'react-beautiful-dnd';
import { RowsMap } from '../../GameBlock/types';
import Word from './DraggableWords/Word';
import Loader from './DraggableWords/Loader';
import Description from './DraggableWords/Description';

interface Props {
  rowLength: number;
  words: RowsMap;
  onClickFn: React.MouseEventHandler;
  cssStyle: string[];
  drag: boolean;
}

const DroppableBase: React.FC<Props> = ({
  rowLength, words, onClickFn, cssStyle, drag,
}) => {
  const loading = useSelector((state: State) => state.loading.isLoading);
  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <>
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
              />
            ))}
            {placeholder}
          </div>
        )}
      </Droppable>
      <Description />
    </>
  );
};

export default DroppableBase;
