import React from 'react';
import './Counter.scoped.scss';

type props = {
  countValue: number,
  decreaseCount: () => void,
  increaseCount: () => void,
};

const Counter: React.FC<props> = ({countValue, decreaseCount, increaseCount}) => {

  return (
    <div className="counter">
      <button onClick={decreaseCount}>-</button>

      <span>{countValue}</span>

      <button onClick={increaseCount}>+</button>
    </div>
  );
};

export default Counter;
