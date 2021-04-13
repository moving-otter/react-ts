import React, {Component} from 'react';
import LoopStatement from './syntax/LoopStatement';
import ConditionalStatement from './syntax/ConditionalStatement';
import StyleClassBinding from './syntax/StyleClassBinding';
import {Highlighter} from '@common/highlighter';
import {
  LoopStatementCode,
  ConditionalStatementCode,
  StyleClassBindingCode
} from '@common/code/react/ExBasicSyntaxCode';

class ExBasicSyntax extends Component {

  render() {
    return (
        <div className="exBasicSyntax">
          <LoopStatement/>
          <Highlighter codeInfo={LoopStatementCode}/>

          <ConditionalStatement/>
          <Highlighter codeInfo={ConditionalStatementCode}/>

          <StyleClassBinding/>
          <Highlighter codeInfo={StyleClassBindingCode}/>
        </div>
    );
  };
}

export default ExBasicSyntax;

