import React from 'react';
import {RadioButton, RadioButtons} from '@veneer/core';

const VeRadioButton: React.FC = () => {
  const getStyle = {
    color: 'white'
  };

  return (
      <div style={getStyle}>
        <RadioButtons
            name="radiobutton_default"
            defaultValue="0"
        >
          <RadioButton value="0" label="Radio 0"/>
          <RadioButton value="1" label="Radio 1"/>
        </RadioButtons>
      </div>
  );
};

export default VeRadioButton;
