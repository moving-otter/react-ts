import styled from "styled-components";
import React from "react";
import { VeChart } from "./VeChart.tsx";
import { VeRadioButton } from "./VeRadioButton";
import { VeAccordion } from "./VeAccordion";

export const ExVeneer = () => {
  return (
    <Wrapper>
      <div className="hwTitle">Veneer Example</div>

      <VeChart />
      <br />

      <VeRadioButton />
      <br />

      <VeAccordion />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
`;
