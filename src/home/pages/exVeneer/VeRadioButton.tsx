import React from 'react';
import {RadioButton, RadioButtons} from '@veneer/core';

const VeRadioButton: React.FC = () => {
  return (
      <RadioButtons name="radiobutton_default" defaultValue="0">
        <RadioButton value="0" label="Radio 0"/>
        <RadioButton value="1" label="Radio 1"/>
      </RadioButtons>
  );
};

export default VeRadioButton;
