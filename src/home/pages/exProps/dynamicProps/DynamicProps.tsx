import React, {useState} from 'react';
import './DynamicProps.scss';

type props = {
  name: string;
  age: number;
};

// Remove React.FC to apply optional props
const DynamicProps = ({name, age}: props) => {
  const [title, setTitle] = useState('Origin Title');

  const handleTitle = () => {
    if (title === 'Origin Title') {
      setTitle('Title Origin');
    } else {
      setTitle('Origin Title');
    }
  };

  return (
    <div className="dynamicProps">
      <div>{title}</div>
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={handleTitle}>Change Title</button>
    </div>
  );
};

DynamicProps.defaultProps = {
  age: 10
};

export default DynamicProps;

