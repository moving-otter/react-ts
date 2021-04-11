import React, {Component} from 'react';
import LoopStatement from './syntax/LoopStatement';
import ConditionalStatement from './syntax/ConditionalStatement';
import StyleClassBinding from './syntax/StyleClassBinding';

class ExBasicSyntax extends Component {

  render() {
    return (
        <div className="exBasicSyntax">
          <LoopStatement/>
          <hr/>

          <ConditionalStatement/>
          <hr/>

          <StyleClassBinding/>
        </div>
    );
  };
}

export default ExBasicSyntax;
