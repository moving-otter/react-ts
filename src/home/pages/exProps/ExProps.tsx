import React from 'react';
import Child from './child/Child';
import './ExProps.scss';

const exProps: React.FC = () => {

  return (
    <div className="exProps">
      Hello exProps

      <Child name={'sample-1'} age={30}/>

      <Child name={'sample-2'} age={28}/>
    </div>
  );
};

export default exProps;
