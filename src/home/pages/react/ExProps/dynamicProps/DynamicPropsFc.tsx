import styled from 'styled-components';
import React, { useState } from 'react';

// Remove React.FC to apply optional props
export const DynamicPropsFc = (props: { name: string; age: number }) => {
  const [title, setTitle] = useState<string>('Origin Title');

  const handleTitle = () => {
    if (title === 'Origin Title') {
      setTitle('Title Origin');
    } else {
      setTitle('Origin Title');
    }
  };

  return (
    <Wrapper>
      <TextContent>{title} - fc</TextContent>
      <TextContent>{props.name}</TextContent>
      <TextContent>{props.age}</TextContent>
      <button onClick={handleTitle}>Change</button>
    </Wrapper>
  );
};

DynamicPropsFc.defaultProps = {
  age: 10,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  padding-top: 20px;
`;

const TextContent = styled.div`
  width: 100%;
  text-align: center;
`;
