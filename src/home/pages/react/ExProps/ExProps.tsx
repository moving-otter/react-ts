import styled from 'styled-components'
import React from 'react';
import {DynamicPropsFc} from './dynamicProps/DynamicPropsFc';
import DynamicPropsClass from './dynamicProps/DynamicPropsClass';
import {RequiredProps} from './RequiredProps';
import Highlighter from '@common/Highlighter';
import {
    RequiredPropsCode,
    DynamicPropsClassCode,
    DynamicPropsFcCode
} from '@common/code/react/ExPropsCode';

export const ExProps = () => {

  return (
    <Wrapper>
      <Title className="hwTitle">Required props</Title>

      <RequiredProps propsOne={'props one'} propsTwo={'props two'}/>
      {/*
        <RequiredProps propsOne={'props one'}/>
        It occurs error because propsTwo is missing.
      */}

      <Highlighter codeInfo={RequiredPropsCode}/>

      <Title className="hwTitle">Dynamic props - Fc</Title>

      <DynamicPropsFc name={'A'}/>
      <DynamicPropsFc name={'B'} age={28}/>
      <DynamicPropsFc name={'C'} age={30}/>

      <Highlighter codeInfo={DynamicPropsFcCode}/>

      <Title className="hwTitle">Dynamic props - Class</Title>

      <DynamicPropsClass name={'D'} age={34}/>
      <DynamicPropsClass name={'D'}/>
      <DynamicPropsClass name={'E'}/>

      <Highlighter codeInfo={DynamicPropsClassCode}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const Title = styled.div`
`;