import * as React from "react";

import Word from "./word/word";
import {Component} from "react";

class RawOfWords extends Component {
  // eslint-disable-next-line max-len,@typescript-eslint/ban-types
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="raw-wrapper">
        <Word word="rawOfWords" />
      </div>
    );
  }
}

export default RawOfWords;
