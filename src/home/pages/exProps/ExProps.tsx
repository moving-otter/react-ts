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

      <DynamicProps name={'sample-1'}/>
      <DynamicProps name={'sample-2'} age={28}/>
    </div>
  );
};

export default exProps;
