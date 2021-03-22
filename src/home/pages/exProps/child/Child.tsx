import React, {useState} from 'react';
import './Child.scss';

type ChildProps = {
  name: string;
  age: number;
};

const Child: React.FC<ChildProps> = ({ name, age }) => {
  const [title, setTitle] = useState('Origin Title');

  const handleTitle = () => {
    if (title === 'Origin Title') {
      setTitle('Title Origin');
    } else {
      setTitle('Origin Title');
    }
  };

  return (
    <div className="child">
      <div>{title}</div>
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={handleTitle}>Change Title</button>
    </div>
  );
};

export default Child;

