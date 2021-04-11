import React from 'react';
import StateClass from './StateClass';
import StateFc from './StateFc';
import {Highlighter} from '@common/highlighter';

const ExState: React.FC = () => {

  return (
      <div className="exState">
        <StateClass/>

        <StateFc/>

        <Highlighter desc={'StateFc.tsx : Functional component type counter example'}>
          {`import React, {useState} from 'react';
import './ExState.scoped.scss';

const ExState: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const updateCount = (flag) => {
    if (flag === '+') {
      setCount(count + 1);
    } else if (flag === '-') {
      setCount(count - 1);
    }
  };
  const resetCount = () => setCount(0);

  return (
      <div className="state">
        <div className="hwTitle">Counter - fc</div>

        <div className="content">
          <button onClick={() => updateCount('-')}>Minus</button>

          <b>{count}</b>

          <button onClick={() => updateCount('+')}>Plus</button>

          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
  )
};

export default ExState;
`}
        </Highlighter>
      </div>
  )
};

export default ExState;
