import React from 'react';
import './Child.scss';

type ChildProps = {
  name: string;
  age: number;
};

const Child: React.FC<ChildProps> = ({ name, age }) => {
  return (
    <div className="child">
      <div>name: {name}</div>
      <div>age: {age}</div>
    </div>
  );
};

export default Child;

