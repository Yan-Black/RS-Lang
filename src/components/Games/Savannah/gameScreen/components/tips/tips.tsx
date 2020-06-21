import * as React from 'react';

const tipsImg = {
  width: '50px',
  height: '50px',
  backgroundImage: 'url(src/components/Games/Savannah/gameScreen/components/tips/keyboard.svg)',
  backgroundSize: 'cover',
  margin: '0 auto 15px auto',
};

const tips = {
  position: 'absolute',
  top: '88%',
  left: '50%',
  width: '220px',
  height: '114px',
  margin: '-57px 0 0 -57px',
}

const Tips = () => (
  <div className="tips" style={tips}>
    <div className='tips-img' style={tipsImg}/>
    <p>Используй клавиши 1, 2, 3 и 4, чтобы дать быстрый ответ</p>
  </div>
);

export default Tips;
