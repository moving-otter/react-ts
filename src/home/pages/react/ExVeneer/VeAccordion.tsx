import React from 'react';
import {Accordion} from '@veneer/core';

export const VeAccordion = () => {
  const [data, setData] = React.useState([{
    content:
        <p>
          Lorem ipsum dolor sit amet. <br/>
          Lorem ipsum dolor sit amet. <br/>
          Lorem ipsum dolor sit amet.
        </p>,
    expanded: false,
    header: {
      centralArea: <span>Title</span>
    },
    id: 'accordionItem1'
  }
  ]);
  const handleExpand = (event, index, item) => {
    const updatedData = [...data];
    updatedData[index].expanded = true;
    setData(updatedData);
  };

  const handleCollapse = (event, index, item) => {
    const updatedData = [...data];
    updatedData[index].expanded = false;
    setData(updatedData);
  };
  return (
      <Accordion
          items={data}
          id="accordion-one-item"
          onExpand={handleExpand}
          onCollapse={handleCollapse}
      />
  );
};