import React from 'react';
import './ExProps.scss';
import DynamicProps from './dynamicProps/DynamicProps';
import RequiredProps from './requiredProps/RequiredProps';

const exProps: React.FC = () => {

  return (
    <div className="exProps">
      <b>Required props</b>

      <RequiredProps propsOne={'props one'} propsTwo={'props two'}/>
      {/*
        <RequiredProps propsOne={'props one'}/>
        It occurs error because propsTwo is missing.
      */}

      <hr/>

      <b>Dynamic props</b>

      <DynamicProps name={'A'}/>
      <DynamicProps name={'B'} age={28}/>
      <DynamicProps name={'C'} age={30}/>
    </div>
  );
};

export default exProps;
