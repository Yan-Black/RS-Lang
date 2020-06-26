import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { RowsMap } from '../../GameBlock/types';
import Word from '../DroppableBase/DraggableWords/Word';

interface Props {
  rowLength: number;
  state: RowsMap;
  onClickFn: React.MouseEventHandler;
  cssStyle: string[];
  drag: boolean;
}

const DroppableBase: React.FC<Props> = ({
  rowLength, state, onClickFn, cssStyle, drag,
}) => (
  <Droppable droppableId="board" direction="horizontal">
    {({ innerRef, droppableProps, placeholder }) => (
      <div
        className="sentence active-sentence"
        style={{ display: 'grid', gridTemplateColumns: `repeat(${rowLength}, 1fr)` }}
        ref={innerRef}
        {...droppableProps}
      >
        {state.cards.map((card, idx:number) => (
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
);

export default DroppableBase;
