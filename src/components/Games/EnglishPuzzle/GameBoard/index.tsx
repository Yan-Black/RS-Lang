import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { State } from 'models/state';
import { enableCheckBtn, enableDontKnowBtn } from 'containers/Games/EnglishPuzzle/GameBoard/HelpButtons/actions';
import { reorder, move, shuffle } from '../Constants';
import HelpButtons from './HelpButtons';
import './index.scss';
import { Card } from '../GameBlock/types';
import DroppableBoard from './DroppableBoard';
import DroppableBase from './DroppableBase';
import { BoardProps } from './Models';

const GameBoard: React.FC<BoardProps> = ({ gameData, background, description }) => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yOffset = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const xOffset: Array<number[]> = useSelector(
    (state: State) => state.engPuzzleXOffset.xOffsets,
  );
  const cardsCollection: Array<Card[]> = useSelector(
    (state: State) => state.engPuzzleCards.cardsCollection,
  );
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const isSolved = useSelector((state: State) => state.engPuzzleSolved.solved);
  const dispatch = useDispatch();
  const [wordsMap, rowLength] = gameData;
  const [isDragPrevented, setDragging] = useState(false);
  const basicStyleCards = new Array(rowLength).fill('start-word', 0, rowLength);
  const [basicStyle, setBasicStyle] = useState(basicStyleCards);
  const [backImg, setBackImg] = useState(background);
  const [state, setState] = useState(wordsMap);
  useEffect(() => {
    const shuffledArr = shuffle(wordsMap.selected);
    setBasicStyle(new Array(rowLength).fill('start-word', 0, rowLength));
    setBackImg(background);
    setState({
      cards: wordsMap.cards,
      selected: shuffledArr,
    });
  }, [wordsMap]);

  const pushWordsToBoard = () => {
    const solvedState = { ...wordsMap };
    solvedState.selected.forEach((card) => wordsMap.cards.push(card));
    solvedState.selected = [];
    setState(solvedState);
  };

  const replaceOnClick = (e) => {
    if (isDragPrevented) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (e.target.parentElement.getAttribute('data-rbd-droppable-id') === 'base') {
      const sourceClone = Array.from(state.selected);
      const destClone = Array.from(state.cards);
      const [replaced] = sourceClone.splice(e.target.id, 1);
      destClone.push([replaced][0]);
      if (destClone.length === wordsMap.selected.length) {
        dispatch(enableCheckBtn());
      }
      setState({
        cards: destClone,
        selected: sourceClone,
      });
    } else {
      const sourceClone = Array.from(state.selected);
      const destClone = Array.from(state.cards);
      const [replaced] = destClone.splice(e.target.id, 1);
      sourceClone.push([replaced][0]);
      if (destClone.length !== wordsMap.selected.length) {
        dispatch(enableDontKnowBtn());
      }
      setState({
        cards: destClone,
        selected: sourceClone,
      });
    }
  };

  const idList = {
    board: 'cards',
    base: 'selected',
  };

  const getList = (id:string) => state[idList[id]];
  const onDragStartHandler = () => {
    if (state.cards.length === rowLength) {
      setBasicStyle(basicStyleCards);
      dispatch(enableCheckBtn());
    }
  };
  const onDragEndHandler = (result) => {
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
      if (results.board.length === wordsMap.selected.length) {
        dispatch(enableCheckBtn());
      } else {
        dispatch(enableDontKnowBtn());
      }
      setState({
        cards: results.board,
        selected: results.base,
      });
    }
  };
  return (
    <DragDropContext
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
    >
      <div
        className="game-board"
        id="board-1"
      >
        <div className="string-numbers">
          {rows.map((number, i) => (
            i === activeIdx ? (
              <div key={`row-${number}`} className="string-number active-number" />
            ) : (
              <div key={`row-${number}`} className={isSolved ? 'string-number active-number' : 'string-number'} />
            )
          ))}
        </div>
        <div
          className={isSolved ? 'canvas' : 'canvas cover'}
          style={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: `${972.8}px ${480}px`,
          }}
        >
          {rows.map((row, i) => (
            i === activeIdx ? (
              <DroppableBoard
                rowLength={rowLength}
                words={state}
                onClickFn={replaceOnClick}
                key={`row-${row}`}
                cssStyle={basicStyle}
                drag={isDragPrevented}
                back={backImg}
                description={description}
              />
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
                      ? cardsCollection[row - 1].map((card: Card, index) => (
                        <div
                          key={(Math.random() * 100).toFixed(3)}
                          className={isSolved ? 'start-word hide' : 'start-word'}
                          style={{
                            backgroundImage: `url(${backImg})`,
                            backgroundSize: `${972.8}px ${480}px`,
                            backgroundPositionY: `${yOffset[row - 1]}%`,
                            backgroundPositionX: `-${xOffset[row - 1][index]}px`,
                          }}
                        >
                          {card.word}
                        </div>
                      )) : (null)}
                  </div>
                ) : (<div key={`row-${row}`} className="sentence" />))
          ))}
        </div>
      </div>
      <DroppableBase
        rowLength={rowLength}
        words={state}
        onClickFn={replaceOnClick}
        cssStyle={basicStyle}
        drag={isDragPrevented}
        back={backImg}
        description={description}
      />
      <HelpButtons
        onClickFn={pushWordsToBoard}
        wordsToApply={wordsMap.selected}
        wordsToCheck={state.cards}
        setCheckedStateToCards={setBasicStyle}
        setDragging={setDragging}
        phrase={wordsMap.selected}
      />
    </DragDropContext>
  );
};
export default GameBoard;
