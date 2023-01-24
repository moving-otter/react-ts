import styled from 'styled-components';
import React from 'react';
import zol_logo from 'src/assets/zol_logo.png';
import { HashRouter, NavLink } from 'react-router-dom';

export const HwHeader = () => {
  return (
    <Wrapper className="hwUserSelectNone">
      <ImageArea src={zol_logo} alt="logo" />

      <HashRouter>
        <NavLink exact to="/">
          hw-site
        </NavLink>
      </HashRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(240, 240, 240);
  width: 100%;
  height: 25px;
  //font-size: 16px;
`;

const ImageArea = styled.img`
  width: 20px;
  height: 22px;
  margin-top: 3px;
  margin-left: 3px;
  margin-right: 7px;
`;
