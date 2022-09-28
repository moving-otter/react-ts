import styled from 'styled-components'
import React from 'react';

export const RequiredProps = (props: {
  propsOne: string;
  propsTwo: string;
}) => {
  return (
      <Wrapper>
        {props.propsOne} / {props.propsTwo}
      </Wrapper>
  )
};

const Wrapper = styled.div`
`
