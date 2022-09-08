import React from 'react';
import './ExProps.scoped.scss';
import DynamicPropsFc from './dynamicProps/DynamicPropsFc';
import DynamicPropsClass from './dynamicProps/DynamicPropsClass';
import RequiredProps from './requiredProps/RequiredProps';
import {Highlighter} from '@common/highlighter';
import {
    RequiredPropsCode,
    DynamicPropsClassCode,
    DynamicPropsFcCode
} from '@common/code/react/ExPropsCode';

const exProps: React.FC = () => {

  return (
    <div className="exProps">
      <div className="hwTitle">Required props</div>

      <RequiredProps propsOne={'props one'} propsTwo={'props two'}/>
      {/*
        <RequiredProps propsOne={'props one'}/>
        It occurs error because propsTwo is missing.
      */}

      <Highlighter codeInfo={RequiredPropsCode}/>

      <div className="hwTitle">Dynamic props - Fc</div>

      <DynamicPropsFc name={'A'}/>
      <DynamicPropsFc name={'B'} age={28}/>
      <DynamicPropsFc name={'C'} age={30}/>

      <Highlighter codeInfo={DynamicPropsFcCode}/>

      <div className="hwTitle">Dynamic props - Class</div>

      <DynamicPropsClass name={'D'} age={34}/>
      <DynamicPropsClass name={'D'}/>
      <DynamicPropsClass name={'E'}/>

      <Highlighter codeInfo={DynamicPropsClassCode}/>
    </div>
  );
};

export default exProps;
