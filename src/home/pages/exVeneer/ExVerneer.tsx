import React from 'react';

import VeChart from './VeChart.tsx';
import VeRadioButton from './VeRadioButton';
import VeAccordion from './VeAccordion';

const ExVeneer: React.FC = () => {

  return (
      <div className="exVeneer">
        <VeChart/>
        <br/>

        <VeRadioButton/>
        <br/>

        <VeAccordion/>
      </div>
  );
};

export default ExVeneer;
