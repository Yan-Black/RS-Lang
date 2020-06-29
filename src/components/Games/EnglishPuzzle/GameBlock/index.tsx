import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models/state';
import GameBoard from '../GameBoard';
import HintsBlock from '../HintsBlock';
import paintings1 from '../Assets/imagesData/level1/levelData/level1';
import paintings2 from '../Assets/imagesData/level2/levelData/level2';
import paintings3 from '../Assets/imagesData/level3/levelData/level3';
import paintings4 from '../Assets/imagesData/level4/levelData/level4';
import paintings5 from '../Assets/imagesData/level5/levelData/level5';
import paintings6 from '../Assets/imagesData/level6/levelData/level6';
import { levelOneDatabase } from '../Assets/imagesData/level1/ImagesImports1';
import { levelTwoDatabase } from '../Assets/imagesData/level2/ImagesImports2';
import { levelThreeDatabase } from '../Assets/imagesData/level3/ImagesImports3';
import { levelFourDatabase } from '../Assets/imagesData/level4/ImagesImports4';
import { levelFiveDatabase } from '../Assets/imagesData/level5/ImagesImports5';
import { levelSixDatabase } from '../Assets/imagesData/level6/ImagesImports6';
import { wordsExtractor } from '../Constants';
import './index.scss';

const GameBlock: React.FC = () => {
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector((state: State) => state.fetchedWords.currentWords);
  const page: number = useSelector((state: State) => state.engPuzzlePage.page);
  const group: number = useSelector((state: State) => state.engPuzzleGroup.group);
  const painitings = [
    paintings1,
    paintings2,
    paintings3,
    paintings4,
    paintings5,
    paintings6,
  ];
  const imports = [
    levelOneDatabase,
    levelTwoDatabase,
    levelThreeDatabase,
    levelFourDatabase,
    levelFiveDatabase,
    levelSixDatabase,
  ];
  const {
    id, name, author, year,
  } = painitings[group - 1][page - 1];
  const playedBackground = imports[group - 1][id];
  const description = `${name} - ${author} - ${year}`;
  return (
    <div className="english-puzzle-game-block">
      <HintsBlock />
      {actualWordsCollection.length ? (
        <GameBoard
          gameData={wordsExtractor(actualWordsCollection, activeIdx)}
          background={playedBackground}
          description={description}
        />
      ) : (null)}
    </div>
  );
};
export default GameBlock;
