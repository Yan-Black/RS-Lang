// /* eslint-disable @typescript-eslint/no-unsafe-call */
// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { State } from 'models/state';
// import Word from './Word';
// import Loader from './Loader';
// import Description from './Description';
// import './index.scss';

// interface Props {
//   words: [{
//     cId: number;
//     status: string;
//     word: string;
//     idx: number;
//     id: number;
//   }];
// }

// const StartWords: React.FC<Props> = ({ words }) => {
//   const loading = useSelector((state: State) => state.loading.isLoading);
//   useEffect(() => {
//     setList(words);
//   }, [words]);

//   const [list, setList] = useState(words);

//   if (loading) {
//     return (
//       <Loader />
//     );
//   }

//   return (
//     <div className="start-words">
//       {
//         list ? (
//           list.filter((card) => card.status === 'onBase')
//             .map((card, i) => (
//               <Word
//                 key={card.cId}
//                 cId={card.cId}
//                 word={card.word}
//                 idx={i}
//                 id={words[0].id}
//               />
//             ))) : (null)
//       }
//       <Description />
//     </div>
//   );
// };
// export default StartWords;
