import React from 'react';
// import StateClass from './StateClass';
import StateFc from './StateFc';
import {Highlighter} from '@common/highlighter';
import {StateClassCode, StateFcCode} from '@common/code/react/ExStateCode';

const ExState: React.FC = () => {

  return (
      <div className="exState">
        <StateFc/>

        <Highlighter desc={StateClassCode.desc}>
          {StateClassCode.code}
        </Highlighter>

        <Highlighter desc={StateFcCode.desc}>
          {StateFcCode.code}
        </Highlighter>
      </div>
  )
};

export default ExState;
