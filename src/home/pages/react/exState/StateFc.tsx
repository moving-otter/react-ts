import React, {useState} from 'react';
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
        <div className="hwTitle">Counter Example</div>

        <div className="content">
          <button onClick={() => updateCount('-')}>Minus</button>

          <b>{count}</b>

          <button onClick={() => updateCount('+')}>Plus</button>

          <button onClick={resetCount}>Reset</button>
        </div>

        <div className="hwDesc">
          Event 에 따른 state 변화를 확인할 수 있는 예제
          <ul>
            <li>1. Function Component</li>
            <li>2. Class Component</li>
          </ul>
        </div>
      </div>
  )
};

export default ExState;
