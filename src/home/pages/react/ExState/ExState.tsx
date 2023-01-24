import React from 'react';
// import StateClass from './StateClass';
import { StateFc } from './StateFc';
import { Highlighter } from 'src/common/Highlighter';
import { StateClassCode, StateFcCode } from 'src/common/code/react/ExStateCode';

export const ExState = () => {
  return (
    <div className="exState">
      <StateFc />

      <Highlighter codeInfo={StateClassCode} />

      <Highlighter codeInfo={StateFcCode} />
    </div>
  );
};
