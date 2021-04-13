import React from 'react';

type props = {
  propsOne: string;
  propsTwo: string;
}

const RequiredProps: React.FC<props> = ({propsOne, propsTwo}) => {
  return (
      <div className="requiredProps">
        {propsOne} / {propsTwo}
      </div>
  )
};

export default RequiredProps;
