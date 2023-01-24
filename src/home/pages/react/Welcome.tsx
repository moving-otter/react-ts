import styled from 'styled-components';
import React from 'react';
import { Highlighter } from 'src/common/Highlighter';
import { WelcomeCode } from 'src/common/code/react/WelcomeCode';

export const Welcome = () => {
  return (
    <Wrapper>
      <Title className="hwTitle">Hello hw-dev-store!</Title>

      <Highlighter codeInfo={WelcomeCode} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.div``;
