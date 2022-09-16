import React from 'react';
// import StateClass from './StateClass';
import {StateFc} from './StateFc';
import Highlighter from '@common/Highlighter';
import {StateClassCode, StateFcCode} from '@common/code/react/ExStateCode';

export const ExState = () => {

  return (
      <div className="exState">
        <StateFc/>

        <Highlighter codeInfo={StateClassCode}/>

        <Highlighter codeInfo={StateFcCode}/>
      </div>
  )
};
