import styled from 'styled-components';
import React, { useEffect } from 'react';
import { HwHeader, HwMenu, HwRouter, HwSearch, HwSidebar } from './frame';

export const Home = () => {
  useEffect(() => {}, []);

  return (
    <Wrapper data-testid="home">
      <Content data-testid="home-content">
        <HwHeader />

        <DepthFirst data-testid="depth-first">
          <HwSearch />

          <DepthSecond data-testid="depth-second">
            <HwSidebar />

            <DepthThird data-testid="depth-third">
              <HwMenu />

              <HwRouter />
            </DepthThird>
          </DepthSecond>
        </DepthFirst>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  position: absolute;
  width: 100%;
  //height: 100%;
  height: calc(100vh);
  background-color: rgb(60, 63, 65);
`;

const DepthFirst = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const DepthSecond = styled.div`
  display: flex;
  width: 100%;
  margin-left: 25px;
  border-left: 1px solid #515658;
  border-right: 1px solid #515658;
  overflow: hidden;
`;

const DepthThird = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background-color: rgb(43, 43, 43);
`;
