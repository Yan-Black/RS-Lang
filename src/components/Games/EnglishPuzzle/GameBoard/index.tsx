/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { State } from 'models/state';
import { reorder, move } from '../Constants';
import HelpButtons from './HelpButtons';
import './index.scss';
import Word from '../StartWords/Word';
import { RowsMap, Card } from '../GameBlock/types';

interface Props {
  wordsMap: RowsMap;
}

const GameBoard: React.FC<Props> = ({ wordsMap }) => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rowLength = wordsMap.selected.length;
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const cardsCollection = useSelector((state: State) => state.engPuzzleCards.cardsCollection);
  const [state, setState] = useState(wordsMap);

  useEffect(() => {
    setState(wordsMap);
  }, [wordsMap]);

  const pushWordsToBoard = () => {
    const solvedState = { ...wordsMap };
    solvedState.selected.forEach((card) => wordsMap.cards.push(card));
    solvedState.selected = [];
    setState(solvedState);
  };

  const idList = {
    board: 'cards',
    base: 'selected',
  };

  const getList = (id:string) => state[idList[id]];

  return (
    <DragDropContext onDragEnd={(result) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      if (source.droppableId === destination.droppableId) {
        const items = reorder(
          getList(source.droppableId),
          source.index,
          destination.index,
        );
        setState({ ...state, cards: items });
        if (source.droppableId === 'base') {
          setState({ ...state, selected: items });
        }
      } else {
        const results = move(
          getList(source.droppableId),
          getList(destination.droppableId),
          source,
          destination,
        );
        setState({
          cards: results.board,
          selected: results.base,
        });
      }
    }}
    >
      <div
        className="game-board"
        id="board-1"
      >
        <div className="string-numbers">
          {rows.map((number, i) => (
            i === activeIdx ? (
              <div key={`row-${number}`} className="string-number active-number">{number}</div>
            ) : (
              <div key={`row-${number}`} className="string-number">{number}</div>
            )
          ))}
        </div>
        <div className="canvas cover">
          {rows.map((row, i) => (
            i === activeIdx ? (
              <Droppable droppableId="board" direction="horizontal">
                {(provided) => (
                  <div
                    className="sentence active-sentence"
                    style={{ display: 'grid', gridTemplateColumns: `repeat(${rowLength}, 1fr)` }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {state.cards.map((card, idx:number) => (
                      <Word
                        key={`${card.word}-${card.cId}`}
                        cId={card.cId}
                        word={card.word}
                        idx={idx}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )
              : (i <= activeIdx - 1 && cardsCollection.length
                ? (
                  <div
                    key={`row-${row}`}
                    className="sentence"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${cardsCollection[row - 1].length}, 1fr)`,
                    }}
                  >
                    {cardsCollection.length
                      ? cardsCollection[row - 1].map((card: Card) => (
                        <div
                          key={(Math.random() * 100).toFixed(3)}
                          className="start-word"
                        >
                          {card.word}
                        </div>
                      )) : (null)}
                  </div>
                ) : (<div key={`row-${row}`} className="sentence" />))
          ))}
        </div>
      </div>
      <Droppable droppableId="base" direction="horizontal">
        {(provided) => (
          <div
            className="start-words"
            style={{ display: 'grid', gridTemplateColumns: `repeat(${rowLength}, 1fr)` }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {state.selected.map((card, idx:number) => (
              <Word
                key={`${card.word}-${card.cId}`}
                cId={card.cId}
                word={card.word}
                idx={idx}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <HelpButtons onClickFn={pushWordsToBoard} wordsToApply={wordsMap.selected} />
    </DragDropContext>
  );
};
export default GameBoard;
