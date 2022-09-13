import styled from 'styled-components'
import React, {useState} from 'react';

export const StateFc = () => {
  const [count, setCount] = useState<number>(0);
  const updateCount = (flag) => {
    if (flag === '+') {
      setCount(count + 1);
    } else if (flag === '-') {
      setCount(count - 1);
    }
  };
  const resetCount = () => setCount(0);

  return (
      <Wrapper>
        <Title className="hwTitle">Counter Example</Title>

        <Content>
          <button onClick={() => updateCount('-')}>Minus</button>

          <b>{count}</b>

          <button onClick={() => updateCount('+')}>Plus</button>

          <button onClick={resetCount}>Reset</button>
        </Content>

        <TextContent className="hwDesc">
          Event 에 따른 state 변화를 확인할 수 있는 예제
          <ul>
            <li>1. Function Component</li>
            <li>2. Class Component</li>
          </ul>
        </TextContent>
      </Wrapper>
  )
};

const Wrapper = styled.div`
`;

const Title = styled.div`
`;

const Content = styled.div`
  padding-left: 10px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;

const TextContent = styled.div`
`;