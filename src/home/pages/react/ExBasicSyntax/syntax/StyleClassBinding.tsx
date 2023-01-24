import styled from 'styled-components';
import React, { useState } from 'react';

export const StyleClassBinding = () => {
  const [flag, setFlag] = useState<boolean>(false);

  const toggleHandler = () => {
    setFlag(!flag);
  };

  return (
    <Wrapper>
      <Content>
        <Title className="hwTitle">Style & Class binding</Title>

        <button onClick={toggleHandler}>Toggle</button>

        <RenderArea flag={flag}>Sample Message Sample Message</RenderArea>
        {flag && <div>Sample Message Sample Message</div>}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  minheight: 150px;
  fontsize: 24px;
`;

const Content = styled.div``;

const Title = styled.div``;

const RenderArea = styled.div`
  display: ${(props) => (props.flag ? 'block' : 'none')};
`;
