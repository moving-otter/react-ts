import React from 'react';
import './ExProps.scoped.scss';
import DynamicPropsFc from './dynamicProps/DynamicPropsFc';
import DynamicPropsClass from './dynamicProps/DynamicPropsClass';
import RequiredProps from './requiredProps/RequiredProps';

const exProps: React.FC = () => {

  return (
    <div className="exProps">
      <div className="hwTitle">Required props</div>

      <RequiredProps propsOne={'props one'} propsTwo={'props two'}/>
      {/*
        <RequiredProps propsOne={'props one'}/>
        It occurs error because propsTwo is missing.
      */}

      <hr/>

      <div className="hwTitle">Dynamic props</div>

      <DynamicPropsFc name={'A'}/>
      <DynamicPropsFc name={'B'} age={28}/>
      <DynamicPropsFc name={'C'} age={30}/>

      <hr/>

      <DynamicPropsClass name={'D'} age={34}/>
      <DynamicPropsClass name={'D'}/>
      <DynamicPropsClass name={'E'}/>
    </div>
  );
};

export default exProps;
