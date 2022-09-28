import styled from 'styled-components'
import React from 'react';

type props = {
  propsOne: string;
  propsTwo: string;
}

const RequiredProps: React.FC<props> = ({propsOne, propsTwo}) => {
  return (
      <Wrapper>
        {propsOne} / {propsTwo}
      </Wrapper>
  )
};

export default RequiredProps;

const Wrapper = styled.div`
`
