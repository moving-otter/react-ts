import styled from 'styled-components';
import React from 'react';
import { LoopStatement } from './syntax/LoopStatement';
import { ConditionalStatement } from './syntax/ConditionalStatement';
import { StyleClassBinding } from './syntax/StyleClassBinding';
import { Highlighter } from '@common/Highlighter';
import {
  ConditionalStatementCode,
  LoopStatementCode,
  StyleClassBindingCode,
} from '@common/code/react/ExBasicSyntaxCode';

export const ExBasicSyntax = () => {
  return (
    <Wrapper>
      <LoopStatement />
      <Highlighter codeInfo={LoopStatementCode} />

      <ConditionalStatement />
      <Highlighter codeInfo={ConditionalStatementCode} />

      <StyleClassBinding />
      <Highlighter codeInfo={StyleClassBindingCode} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
