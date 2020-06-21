import * as React from 'react';
import {Component, Fragment} from 'react';
import DefaultInfo from './components/defaultInfo/defaultInfo';
import Button from './components/startButton/startButton';
import Cross from './components/cross/cross';

const main = {
  position: 'absolute',
  top: '50%',
  marginTop: '-150px',
  height: '300px',
  textAlign: 'center',
  right: 0,
  left: 0,
}

// eslint-disable-next-line react/prefer-stateless-function
class MainScreen extends Component {
  // eslint-disable-next-line max-len
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <>
        <Cross/>
        <div className="main" style={main}>
          <DefaultInfo/>
          <Button/>
        </div>
      </>
    );
  }
}

export default MainScreen;
