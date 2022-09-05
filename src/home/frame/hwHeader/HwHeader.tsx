import styled from 'styled-components'
import React from 'react';
import {HashRouter, NavLink} from 'react-router-dom';
import favicon from "@assets/favicon.png";

export const HwHeader = () => {
  return (
      <Wrapper className="hwUserSelectNone">
        <ImageArea src={favicon} alt="logo"/>

        <HashRouter>
          <NavLink exact to="/">hw-dev-store</NavLink>
        </HashRouter>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  width: 100%;
  height: 20px;
`;

const ImageArea = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 3px;
  margin-right: 7px;
`;
