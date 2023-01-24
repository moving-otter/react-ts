import styled from 'styled-components';
import React, { useState } from 'react';

export const ConditionalStatement = () => {
  const [flag, setFlag] = useState<boolean>(false);

  let content;
  if (flag) {
    content = <div>true</div>;
  } else {
    // <> => <React.Fragment>
    content = (
      <>
        <div>false</div>
        <div>false</div>
      </>
    );
  }

  return (
    <Wrapper>
      <Content>
        <Title className="hwTitle">Conditional statement</Title>
        {content}

        {flag ? (
          <div>true</div>
        ) : (
          <>
            <div>false</div>
            <div>false</div>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div``;

const Title = styled.div``;
