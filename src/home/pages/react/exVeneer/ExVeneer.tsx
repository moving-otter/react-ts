import React from 'react';
import './ExVeneer.scoped.scss';
import VeChart from './VeChart.tsx';
import VeRadioButton from './VeRadioButton';
import VeAccordion from './VeAccordion';

const ExVeneer: React.FC = () => {

  return (
      <div className="exVeneer">
        <div className="hwTitle">Veneer Example</div>

        <VeChart/>
        <br/>

        <VeRadioButton/>
        <br/>

        <VeAccordion/>
      </div>
  );
};

export default ExVeneer;
