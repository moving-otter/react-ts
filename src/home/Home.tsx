import styled from "styled-components";
import React, { useEffect } from "react";
import {
  HwHeader,
  HwSidebar,
  HwSearch,
  HwFooter,
  HwRouter,
  HwMenu
} from "./frame/Frame";

export const Home = () => {
  useEffect(() => {

  }, [])

  return (
    <Wrapper>
      <Content>
        <HwHeader />

        <DepthFirst>
          <HwSearch />

          <DepthSecond>
            <HwSidebar />

            <DepthThird>
              <HwMenu />

              <HwRouter />
            </DepthThird>
          </DepthSecond>

          <RightArea />
        </DepthFirst>

        <HwFooter />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
  margin-right: 20px;
  border-left: 1px solid #515658;
  border-right: 1px solid #515658;
  overflow: auto;
`;

const DepthThird = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  background-color: rgb(43, 43, 43);
`;

const RightArea = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 22px;
  height: 100%;
  padding-top: 5px;
  right: 0;
`;
