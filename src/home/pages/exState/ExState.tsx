import React from 'react';
import StateClass from './StateClass';
import StateFc from './StateFc';

const ExState: React.FC = () => {

  return (
      <div className="exState">
        <StateClass/>

        <StateFc/>
      </div>
  )
};

export default ExState;
