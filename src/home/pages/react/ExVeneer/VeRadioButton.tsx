import styled from "styled-components";
import React from "react";
import { RadioButton, RadioButtons } from "@veneer/core";

export const VeRadioButton = () => {
  return (
    <Wrapper>
      <RadioButtons name="radiobutton_default" defaultValue="0">
        <RadioButton value="0" label="Radio 0" />
        <RadioButton value="1" label="Radio 1" />
      </RadioButtons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;
