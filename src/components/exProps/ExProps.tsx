import React from 'react';
import './ExProps.scss';
import Child from './child/Child';

const exProps: React.FC = () => {

  return (
    <div className="exProps">
      Hello exProps

      <Child
          name={'황병주'}
          age={30}
      />

      <Child
          name={'유준형'}
          age={28}
      />
    </div>
  );
};

export default exProps;
